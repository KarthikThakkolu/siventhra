
// const path = require("path");

// require("dotenv").config({
//   path: path.join(__dirname, ".env"),
//   override: true,
// });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const http = require("http");
// const WebSocket = require("ws");

// // Routes must be imported AFTER dotenv
// const feedbackRoutes = require("./routers/feedback");
// const orderRoutes = require("./routers/orderRoutes");

// const app = express();

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;
// const FRONTEND_URL =
//   process.env.FRONTEND_URL || "http://localhost:3000";

// app.use(cors({
//   origin: FRONTEND_URL,
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

// app.use(express.json({ limit: "10kb" }));

// app.use(express.urlencoded({
//   extended: true,
//   limit: "10kb",
// }));

// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"))
// );

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Siventhra backend is running.",
//   });
// });

// app.use("/api/feedback", feedbackRoutes);
// app.use("/api/orders", orderRoutes);

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API route not found.",
//     path: req.originalUrl,
//   });
// });

// const server = http.createServer(app);

// const wss = new WebSocket.Server({
//   server,
//   path: "/ws",
// });

// wss.on("connection", (socket) => {
//   console.log("WebSocket connected");

//   socket.send(JSON.stringify({
//     success: true,
//     message: "WebSocket connected successfully",
//   }));

//   socket.on("message", (message) => {
//     console.log("Received:", message.toString());
//   });
// });

// const startServer = async () => {
//   try {
//     if (!MONGO_URI) {
//       throw new Error("MONGO_URI is missing.");
//     }

//     await mongoose.connect(MONGO_URI);

//     console.log("MongoDB connected successfully");

//     server.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//       console.log(`Orders API: http://localhost:${PORT}/api/orders`);
//       console.log(`WebSocket: ws://localhost:${PORT}/ws`);
//     });

//   } catch (error) {
//     console.error("Server startup failed:", error.message);
//     await mongoose.disconnect().catch(() => {});
//     process.exit(1);
//   }
// };

// startServer();
