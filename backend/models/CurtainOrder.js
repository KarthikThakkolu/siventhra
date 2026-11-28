
// const mongoose = require("mongoose");

// const curtainOrderSchema = new mongoose.Schema(
//   {
//     customerName: {
//       type: String,
//       required: true,
//       trim: true,
//       maxlength: 100,
//     },

//     customerPhone: {
//       type: String,
//       required: true,
//       trim: true,
//       maxlength: 18,
//     },

//     requirements: {
//       type: String,
//       trim: true,
//       default: "",
//       maxlength: 1000,
//     },

//     fabric: {
//       name: {
//         type: String,
//         required: true,
//         trim: true,
//       },

//       price: {
//         type: Number,
//         required: true,
//         min: 0,
//       },
//     },

//     room: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     width: {
//       type: Number,
//       required: true,
//       min: 0.1,
//     },

//     height: {
//       type: Number,
//       required: true,
//       min: 0.1,
//     },

//     curtainStyle: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     fullness: {
//       type: Number,
//       required: true,
//       min: 0.1,
//     },

//     quantity: {
//       type: Number,
//       required: true,
//       min: 0.1,
//     },

//     estimatedPrice: {
//       type: Number,
//       required: true,
//       min: 0,
//     },

//     status: {
//       type: String,
//       enum: [
//         "Pending",
//         "Contacted",
//         "Confirmed",
//         "Completed",
//         "Cancelled",
//       ],
//       default: "Pending",
//     },

//     // WhatsApp notification tracking
//     whatsappNotification: {
//       type: String,
//       enum: ["Pending", "Sent", "Failed"],
//       default: "Pending",
//     },

//     whatsappMessageId: {
//       type: String,
//       default: "",
//     },

//     whatsappError: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const CurtainOrder = mongoose.model(
//   "CurtainOrder",
//   curtainOrderSchema
// );

// module.exports = CurtainOrder;
