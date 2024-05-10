const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    listingId: {
      type: String,
    },
    authorId: {
      type: String,
    },
    checkIn: {
      type: String,
    },

    guestNumber: {
      type: Number,
    },
    premiumSeatingPrice: {
      type: Number,
    },
    stageDecorationPrice: {
      type: Number,
    },
    basePrice: {
      type: Number,
    },
    taxes: {
      type: Number,
    },
    authorEarnedPrice: {
      type: Number,
    },
    orderId: {
      type: Number,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const reservationDB = mongoose.model("reservationDB", reservationSchema);

module.exports = reservationDB;
