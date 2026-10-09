const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        city: {
            type: String,
            required: true,
            trim: true
        },

        service: {
            type: String,
            required: true,
            trim: true
        },

        date: {
            type: String,
            required: true
        },

        feedback: {
            type: String,
            required: true,
            trim: true
        },

        recommend: {
            type: Boolean,
            default: false
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        images: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Feedback", feedbackSchema);