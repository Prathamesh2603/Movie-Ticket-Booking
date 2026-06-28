import express from 'express';
import cors from 'cors';
import "dotenv/config.js";
import { connectDB } from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'

const app = express();

await connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// API Routes
app.get("/", (req, res, next) => {
  res.send("Server is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});