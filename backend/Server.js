const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();


// =====================================
// MIDDLEWARE
// =====================================

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Siventhra backend server is running!"
    });
});


// =====================================
// SERVER
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Backend server running on http://localhost:${PORT}`
    );
});