
// const twilio = require("twilio");

// // Read credentials from .env
// const accountSid = process.env.TWILIO_ACCOUNT_SID?.trim();
// const authToken = process.env.TWILIO_AUTH_TOKEN?.trim();

// console.log("========== TWILIO CONFIGURATION ==========");
// console.log("Account SID exists:", Boolean(accountSid));
// console.log("Account SID starts with AC:", accountSid?.startsWith("AC"));
// console.log("Auth Token exists:", Boolean(authToken));
// console.log("==========================================");

// if (!accountSid || !accountSid.startsWith("AC")) {
//   throw new Error(
//     "Invalid TWILIO_ACCOUNT_SID. Check your backend .env file."
//   );
// }

// if (!authToken) {
//   throw new Error("TWILIO_AUTH_TOKEN is missing.");
// }

// const client = twilio(accountSid, authToken);

// // Send WhatsApp notification
// const sendWhatsAppMessage = async (message) => {
//   try {
//     const response = await client.messages.create({
//       from: process.env.TWILIO_WHATSAPP_FROM,
//       to: process.env.TWILIO_WHATSAPP_TO,
//       body: message,
//     });

//     console.log("WhatsApp message submitted:", response.sid);

//     return response;

//   } catch (error) {
//     console.error("WhatsApp Error:", error.message);
//     throw error;
//   }
// };

// module.exports = sendWhatsAppMessage;



const twilio = require("twilio");

// Read credentials from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID?.trim();
const authToken = process.env.TWILIO_AUTH_TOKEN?.trim();

const fromNumber = process.env.TWILIO_WHATSAPP_FROM?.trim();
const toNumber = process.env.TWILIO_WHATSAPP_TO?.trim();

if (!accountSid || !accountSid.startsWith("AC")) {
  throw new Error("Invalid TWILIO_ACCOUNT_SID in .env");
}

if (!authToken) {
  throw new Error("TWILIO_AUTH_TOKEN is missing in .env");
}

if (!fromNumber || !toNumber) {
  throw new Error("Twilio WhatsApp FROM or TO number is missing.");
}

// Normalize WhatsApp numbers
const normalizeWhatsAppNumber = (number) => {
  return number.startsWith("whatsapp:")
    ? number
    : `whatsapp:${number}`;
};

// Create Twilio client
const client = twilio(accountSid, authToken);

// Send WhatsApp message
const sendWhatsAppMessage = async (message) => {
  try {
    const response = await client.messages.create({
      from: normalizeWhatsAppNumber(fromNumber),
      to: normalizeWhatsAppNumber(toNumber),
      body: message,
    });

    console.log("WhatsApp message submitted:", response.sid);
    console.log("WhatsApp status:", response.status);

    return response;

  } catch (error) {
    console.error("WhatsApp Error:", error.message);
    console.error("Twilio Error Code:", error.code);

    throw error;
  }
};

module.exports = sendWhatsAppMessage;
