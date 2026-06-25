🚀 Express API CI/CD Pipeline
A fully automated DevOps workflow that tests, containerizes, and deploys a Node.js Express API to Docker Hub on every code push.

🛠 Tech Stack
Backend & Testing: Node.js, Express, Jest, Supertest

DevOps: Docker, GitHub Actions, Docker Hub

✨ Key Features
Automated Validation: Serverless endpoint testing using Supertest to block broken code.

Optimized Containers: Multi-stage Dockerfile and .dockerignore ensure lean, secure production images.

Zero-Touch CI/CD: A two-job GitHub Actions workflow sequentially runs tests, builds the image, and pushes it to Docker Hub.

High Performance: Utilizes Docker layer caching to dramatically reduce pipeline execution time.

🚀 Local Quickstart
Install dependencies: npm install

Run test suite: npm test

Build image: docker build -t express-api .

Run container: docker run -p 3000:3000 express-api

⚙️ Pipeline Setup
To activate the automation, add the following to your GitHub Repository Secrets:

DOCKER_USERNAME: Your Docker Hub username

DOCKER_TOKEN: Your Docker Hub Personal Access Token
