import express from 'express';
import cors from 'cors';
import "dotenv/config.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res, next) => {
  res.send("Server is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});