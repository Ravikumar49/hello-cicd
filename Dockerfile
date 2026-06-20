# Stage 1: Install all dependencies (including dev)
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ ./src/

# Stage 2: Production image with only what's needed
FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "src/server.js"]