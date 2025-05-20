# devtreeBackend

Node.js Express backend written in TypeScript.

## 📋 Description

A backend server built with **Node.js**, **Express**, and **TypeScript** designed to serve APIs for DevTree. It includes structured logging, middleware support, error handling, and clean code architecture.

## ✨ Features

- TypeScript support
- RESTful API structure
- Middleware integration (e.g., logging with Winston, request logging with Morgan)
- Centralized error handling
- Environment configuration
- Logger with file and console output
- Modular folder structure for scalability
- Scripts for development and production builds

## 📁 Project Structure
devtreeBackend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   ├── logs/
│   └── index.ts
├── dist/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/OscarVarelaGallardo/devtreeBackend.git
cd devtreeBackend
npm install

## Run in development mode
npm run dev
## Build for production
npm run build
## Run compiled code
npm start
## 🧪 Testing the Server
curl http://localhost:3000/api/status

📦 Dependencies
	•	express
	•	typescript
	•	dotenv
	•	winston
	•	morgan
	•	ts-node-dev

⚙️ Environment Variables
PORT=3000
NODE_ENV=development
🧑‍💻 Author

Oscar Varela
GitHub: OscarVarelaGallardo
