
// const CurtainOrder = require("../models/CurtainOrder");
// const sendWhatsAppMessage = require("../utils/whatsapp");

// // ======================================================
// // CREATE NEW CURTAIN ORDER + WHATSAPP NOTIFICATION
// // ======================================================

// const createOrder = async (req, res) => {
//   try {
//     const {
//       customerName,
//       customerPhone,
//       requirements,
//       fabric,
//       room,
//       width,
//       height,
//       curtainStyle,
//       fullness,
//       quantity,
//       estimatedPrice,
//     } = req.body;

//     // Validate customer details
//     if (!customerName || !customerPhone) {
//       return res.status(400).json({
//         success: false,
//         message: "Customer name and phone number are required.",
//       });
//     }

//     const phoneRegex = /^[0-9+\-\s()]{8,18}$/;

//     if (!phoneRegex.test(customerPhone.trim())) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid phone number.",
//       });
//     }

//     // Validate fabric
//     if (
//       !fabric ||
//       !fabric.name ||
//       fabric.price === undefined ||
//       !Number.isFinite(Number(fabric.price)) ||
//       Number(fabric.price) < 0
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid fabric details are required.",
//       });
//     }

//     // Validate required text fields
//     if (!room || !curtainStyle) {
//       return res.status(400).json({
//         success: false,
//         message: "Room and curtain style are required.",
//       });
//     }

//     // Validate numeric fields
//     const numericFields = {
//       width,
//       height,
//       fullness,
//       quantity,
//       estimatedPrice,
//     };

//     for (const [field, value] of Object.entries(numericFields)) {
//       if (
//         value === undefined ||
//         value === null ||
//         value === "" ||
//         !Number.isFinite(Number(value))
//       ) {
//         return res.status(400).json({
//           success: false,
//           message: `Valid ${field} is required.`,
//         });
//       }
//     }

//     if (
//       Number(width) <= 0 ||
//       Number(height) <= 0 ||
//       Number(fullness) <= 0 ||
//       Number(quantity) <= 0 ||
//       Number(estimatedPrice) < 0
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Measurements and quantity must be positive.",
//       });
//     }

//     // ======================================================
//     // 1. SAVE ORDER TO MONGODB
//     // ======================================================

//     const newOrder = await CurtainOrder.create({
//       customerName: customerName.trim(),
//       customerPhone: customerPhone.trim(),
//       requirements: requirements || "",
//       fabric: {
//         name: fabric.name,
//         price: Number(fabric.price),
//       },
//       room,
//       width: Number(width),
//       height: Number(height),
//       curtainStyle,
//       fullness: Number(fullness),
//       quantity: Number(quantity),
//       estimatedPrice: Number(estimatedPrice),
//     });

//     // ======================================================
//     // 2. PREPARE WHATSAPP MESSAGE
//     // ======================================================

//     const whatsappMessage = `
// 🪟 NEW CURTAIN ORDER

// Order ID: ${newOrder._id}

// Customer Name: ${newOrder.customerName}
// Customer Phone: ${newOrder.customerPhone}

// Room: ${newOrder.room}

// Fabric: ${newOrder.fabric.name}
// Fabric Price: ₹${newOrder.fabric.price}

// Width: ${newOrder.width}
// Height: ${newOrder.height}

// Curtain Style: ${newOrder.curtainStyle}
// Fullness: ${newOrder.fullness}
// Quantity: ${newOrder.quantity}

// Estimated Price: ₹${newOrder.estimatedPrice}

// Requirements: ${newOrder.requirements || "None"}

// Order Status: ${newOrder.status}
//     `.trim();

//     // ======================================================
//     // 3. SEND WHATSAPP MESSAGE THROUGH TWILIO
//     // ======================================================

//     let whatsappStatus = "Failed";
//     let whatsappMessageId = "";
//     let whatsappError = "";

//     try {
//       const whatsappResult = await sendWhatsAppMessage(
//         whatsappMessage
//       );

//       whatsappStatus = "Sent";
//       whatsappMessageId = whatsappResult.messageId;

//     } catch (whatsappErr) {
//       console.error("WhatsApp sending failed:", whatsappErr.message);

//       whatsappStatus = "Failed";
//       whatsappError = whatsappErr.message;
//     }

//     // ======================================================
//     // 4. UPDATE WHATSAPP STATUS IN MONGODB
//     // ======================================================

//     await CurtainOrder.findByIdAndUpdate(
//       newOrder._id,
//       {
//         whatsappNotification: whatsappStatus,
//         whatsappMessageId,
//         whatsappError,
//       },
//       {
//         new: true,
//       }
//     );

//     // ======================================================
//     // 5. RETURN RESPONSE TO FRONTEND
//     // ======================================================

//     return res.status(201).json({
//       success: true,
//       message: "Your curtain order has been submitted successfully.",
//       orderId: newOrder._id,
//       whatsappNotification: whatsappStatus,
//       order: newOrder,
//     });

//   } catch (error) {
//     console.error("Create order error:", error);

//     if (error.name === "ValidationError") {
//       return res.status(400).json({
//         success: false,
//         message: error.message,
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Unable to submit your order. Please try again.",
//     });
//   }
// };

// // ======================================================
// // GET ALL CURTAIN ORDERS
// // ======================================================

// const getAllOrders = async (req, res) => {
//   try {
//     const orders = await CurtainOrder.find().sort({
//       createdAt: -1,
//     });

//     return res.status(200).json({
//       success: true,
//       count: orders.length,
//       orders,
//     });

//   } catch (error) {
//     console.error("Get orders error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to retrieve orders.",
//     });
//   }
// };

// // ======================================================
// // GET SINGLE CURTAIN ORDER
// // ======================================================

// const getOrderById = async (req, res) => {
//   try {
//     const order = await CurtainOrder.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Curtain order not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       order,
//     });

//   } catch (error) {
//     console.error("Get order error:", error);

//     if (error.name === "CastError") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order ID.",
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Unable to retrieve order.",
//     });
//   }
// };

// // ======================================================
// // UPDATE ORDER STATUS
// // ======================================================

// const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const allowedStatuses = [
//       "Pending",
//       "Contacted",
//       "Confirmed",
//       "Completed",
//       "Cancelled",
//     ];

//     if (!allowedStatuses.includes(status)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order status.",
//       });
//     }

//     const updatedOrder = await CurtainOrder.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!updatedOrder) {
//       return res.status(404).json({
//         success: false,
//         message: "Curtain order not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Order status updated successfully.",
//       order: updatedOrder,
//     });

//   } catch (error) {
//     console.error("Update order error:", error);

//     if (error.name === "CastError") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order ID.",
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Unable to update order.",
//     });
//   }
// };

// // ======================================================
// // EXPORT CONTROLLER FUNCTIONS
// // ======================================================

// module.exports = {
//   createOrder,
//   getAllOrders,
//   getOrderById,
//   updateOrderStatus,
// };
