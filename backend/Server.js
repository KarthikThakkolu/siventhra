const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const feedbackRoutes = require("./routers/feedback");


// =====================================
// ENVIRONMENT VARIABLES
// =====================================

dotenv.config();


// =====================================
// EXPRESS APP
// =====================================

const app = express();


// =====================================
// PORT
// =====================================

const PORT = process.env.PORT || 3000;


// =====================================
// CORS
// =====================================

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5000",

        methods: [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "OPTIONS"
        ],

        allowedHeaders: [
            "Content-Type",
            "Authorization"
        ]
    })
);


// =====================================
// BODY PARSERS
// =====================================

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// =====================================
// STATIC UPLOADS
// =====================================

app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);


// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {

    res.status(200).send(
        "Siventhra backend is running successfully."
    );

});


// =====================================
// FEEDBACK ROUTE
// =====================================

app.use(
    "/api/feedback",
    feedbackRoutes
);


// =====================================
// HTTP SERVER
// =====================================

const server = http.createServer(app);


// =====================================
// WEBSOCKET SERVER
// =====================================

const wss = new WebSocket.Server({
    server,

    path: "/ws"
});


wss.on("connection", (socket) => {

    console.log(
        "WebSocket client connected"
    );


    socket.send(
        JSON.stringify({
            message:
                "WebSocket connected successfully"
        })
    );


    socket.on("close", () => {

        console.log(
            "WebSocket client disconnected"
        );

    });

});


// =====================================
// DATABASE + SERVER START
// =====================================

const startServer = async () => {

    try {

        // =====================================
        // CONNECT MONGODB
        // =====================================

        await mongoose.connect(
            process.env.MONGO_URI
        );


        console.log(
            "MongoDB connected successfully"
        );


        // =====================================
        // START SERVER
        // =====================================

        server.listen(
            PORT,
            () => {

                console.log(
                    `Server running on http://localhost:${PORT}`
                );

                console.log(
                    `Feedback API: http://localhost:${PORT}/api/feedback`
                );

                console.log(
                    `WebSocket: ws://localhost:${PORT}/ws`
                );

            }
        );

    } catch (error) {

        console.error(
            "MongoDB connection failed:"
        );

        console.error(error);

        process.exit(1);

    }

};


// =====================================
// START APPLICATION
// =====================================

startServer();