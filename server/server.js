import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/connectDB.js";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import listRoutes from "./routes/listRoutes.js";

const app = express();
// const port = process.env.PORT;
connectDB();

// CORS Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true, // Required for sending cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the ToDoPy server!");
});
app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/list", listRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on http://127.0.0.1:${port}`);
// });

export default app;
