
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

// ROUTES
const feedbackRoutes = require("./routers/feedback");
const orderRoutes = require("./routers/orderRoutes");

// ENVIRONMENT VARIABLES
dotenv.config();

// EXPRESS APP
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// CORS
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

// BODY PARSERS
app.use(express.json({ limit: "10kb" }));

app.use(
    express.urlencoded({
        extended: true
    })
);

// STATIC UPLOADS
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// ROOT ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Siventhra Interior & Decors backend is running successfully."
    });
});

// FEEDBACK API
app.use("/api/feedback", feedbackRoutes);

// CURTAIN ORDER API
app.use("/api/orders", orderRoutes);

// HTTP SERVER
const server = http.createServer(app);

// WEBSOCKET SERVER
const wss = new WebSocket.Server({
    server,
    path: "/ws"
});

wss.on("connection", (socket) => {

    console.log("WebSocket client connected");

    socket.send(
        JSON.stringify({
            message: "WebSocket connected successfully"
        })
    );

    socket.on("close", () => {
        console.log("WebSocket client disconnected");
    });

    socket.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
});

// DATABASE CONNECTION AND SERVER START
const startServer = async () => {

    try {

        // CONNECT MONGODB
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        // START SERVER
        server.listen(PORT, () => {

            console.log(`Server running on http://localhost:${PORT}`);

            console.log(`Feedback API: http://localhost:${PORT}/api/feedback`);

            console.log(`Curtain Order API: http://localhost:${PORT}/api/orders`);

            console.log(`WebSocket: ws://localhost:${PORT}/ws`);

        });

    } catch (error) {

        console.error("Server startup failed:");
        console.error(error);

        process.exit(1);

    }
};

// START APPLICATION
startServer();
