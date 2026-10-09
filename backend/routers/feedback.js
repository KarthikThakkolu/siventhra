const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Feedback = require("../models/feedback");

const router = express.Router();


// =====================================
// UPLOAD DIRECTORY
// =====================================

const uploadDirectory = path.join(
    __dirname,
    "..",
    "uploads",
    "feedback"
);

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, {
        recursive: true
    });
}


// =====================================
// MULTER STORAGE
// =====================================

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },

    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);

        const fileName =
            "feedback-" +
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            extension;

        cb(null, fileName);
    }
});


// =====================================
// FILE FILTER
// =====================================

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error(
                "Only JPG, PNG and WEBP images are allowed."
            ),
            false
        );
    }
};


// =====================================
// MULTER CONFIGURATION
// =====================================

const upload = multer({
    storage,

    fileFilter,

    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 5
    }
});


// =====================================
// POST FEEDBACK
// =====================================

router.post(
    "/",
    upload.array("images", 5),

    async (req, res) => {
        try {
            console.log("=================================");
            console.log("Feedback request received");
            console.log("Body:", req.body);
            console.log(
                "Images:",
                req.files ? req.files.length : 0
            );
            console.log("=================================");


            const {
                name,
                phone,
                email,
                city,
                service,
                date,
                feedback,
                recommend,
                rating
            } = req.body;


            // =====================================
            // VALIDATION
            // =====================================

            if (
                !name ||
                !phone ||
                !email ||
                !city ||
                !service ||
                !date ||
                !feedback
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Please fill in all required fields."
                });
            }


            if (!rating) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide a rating."
                });
            }


            const numericRating = Number(rating);

            if (
                Number.isNaN(numericRating) ||
                numericRating < 1 ||
                numericRating > 5
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Rating must be between 1 and 5."
                });
            }


            // =====================================
            // IMAGE PATHS
            // =====================================

            const imagePaths = (req.files || []).map(
                (file) => `/uploads/feedback/${file.filename}`
            );


            // =====================================
            // CREATE FEEDBACK
            // =====================================

            const newFeedback = new Feedback({
                name: name.trim(),

                phone: phone.trim(),

                email: email.trim().toLowerCase(),

                city: city.trim(),

                service: service.trim(),

                date,

                feedback: feedback.trim(),

                recommend:
                    String(recommend).toLowerCase() === "true",

                rating: numericRating,

                images: imagePaths
            });


            // =====================================
            // SAVE TO DATABASE
            // =====================================

            const savedFeedback =
                await newFeedback.save();


            console.log(
                "Feedback saved:",
                savedFeedback._id
            );


            // =====================================
            // RESPONSE
            // =====================================

            return res.status(201).json({
                success: true,

                message:
                    "Thank you! Your feedback has been submitted successfully.",

                feedback: {
                    id: savedFeedback._id,
                    name: savedFeedback.name,
                    rating: savedFeedback.rating
                }
            });

        } catch (error) {

            console.error(
                "Feedback route error:",
                error
            );


            return res.status(500).json({
                success: false,
                message:
                    "Unable to submit feedback. Please try again."
            });
        }
    }
);


// =====================================
// MULTER / UPLOAD ERROR HANDLER
// =====================================

router.use((error, req, res, next) => {

    if (error instanceof multer.MulterError) {

        if (error.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message:
                    "Each image must be 5MB or smaller."
            });
        }

        if (error.code === "LIMIT_FILE_COUNT") {
            return res.status(400).json({
                success: false,
                message:
                    "You can upload a maximum of 5 images."
            });
        }

        return res.status(400).json({
            success: false,
            message: error.message
        });
    }


    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }


    next();
});


module.exports = router;