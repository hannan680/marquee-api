const mongoose = require("mongoose");

const marqueeSchema = new mongoose.Schema(
  {
    author: {
      type: String,
    },
    status: {
      type: String,
      default: "In progress",
    },
    marqueeType: {
      type: String,
    },
    location: {
      country: {
        type: {},
      },
      addressLineOne: {
        type: String,
      },
      addressLineTwo: {
        type: String,
      },
      city: {
        type: {},
      },
      state: {
        type: {},
      },
      postCode: {
        type: String,
      },
      mapEmbedLink: {
        type: String,
      },
    },
    capacity: {
      type: Number, // Maximum capacity of the marquee
    },
    hall: {
      type: Number, // Maximum capacity of the marquee
    },

    amenities: {
      type: Array,
    },
    photos: {
      type: Array,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    security: {
      type: Array,
    },

    basePrice: {
      type: Number,
    },
    premiumSeatingPrice: {
      type: Number,
      default: 0,
    },
    stageDecorationPrice: {
      type: Number,
      default: 0,
    },
    ratings: {
      type: Number,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Marquee = mongoose.model("Marquee", marqueeSchema);

module.exports = Marquee;
