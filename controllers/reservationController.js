const mongoose = require("mongoose");
const Marquee = require("../models/marquee.model.js");
const reservationDB = require("../models/reservation.model.js");
require("dotenv").config();

// stripe controller & payment process
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.getStripePublishableKey = async (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

exports.createPaymentIntent = async (req, res) => {
  try {
    console.log("hit, payment");
    const payload = req.body;
    console.log(payload);

    const paymentIntent = await stripe.paymentIntents.create({
      description: "Software development services",
      shipping: {
        name: "Sk Mirajul Islam",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};

// save new reservation
exports.newReservation = async (req, res) => {
  try {
    const payload = req.body;
    const listingId = payload.listingId;
    const authorId = payload.authorId;
    const guestNumber = payload.guestNumber;
    const checkIn = payload.checkIn;
    const stageDecoration = payload.stageDecoration;
    const premiumSeating = payload.premiumSeating;
    const orderId = payload.orderId;
    console.log(payload);
    const findCriteria = {
      _id: new mongoose.Types.ObjectId(listingId),
    };

    const listingDetails = await Marquee.findById(findCriteria);

    const basePrice = parseInt(listingDetails.basePrice);

    const stageDecorationPrice =
      stageDecoration != 0 ? parseInt(listingDetails.stageDecorationPrice) : 0;
    const premiumSeatingPrice =
      premiumSeating != 0 ? parseInt(listingDetails.premiumSeatingPrice) : 0;

    let newReservation = {
      listingId: listingId,
      authorId: authorId,
      guestNumber: parseInt(guestNumber),
      checkIn: checkIn,
      stageDecorationPrice: stageDecorationPrice,
      premiumSeatingPrice: premiumSeatingPrice,
      basePrice: basePrice,
      orderId: orderId,
    };

    const findSavedListingReservation = await reservationDB.find({
      listingId: listingId,
    });
    console.log(findSavedListingReservation);

    const listing = findSavedListingReservation.map((reservation, i) => {
      return reservation.checkIn === checkIn;
    });

    console.log(listing, "line 80");

    if (!listing.includes(true)) {
      const saveReservation = new reservationDB(newReservation).save();
      res.status(200).send("Payment confirmed.");
    } else {
      res.status(404).send("Something went wrong try again later.");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const payload = req.body;
    const listingId = payload.id;

    const findCriteria = {
      listingId: listingId,
    };

    const reservationsData = await reservationDB.find(findCriteria);

    res.status(200).send(reservationsData);
  } catch (error) {
    console.log(error);
  }
};

exports.getAuthorsReservations = async (req, res) => {
  try {
    const userId = req.user;

    const findCriteria = {
      authorId: userId,
    };

    const authorsListingReservations = await reservationDB.find(findCriteria);

    if (!authorsListingReservations) {
      res.json({ message: "No listing booked yet" });
    }

    res.status(200).send(authorsListingReservations);
  } catch (error) {
    console.log(error);
  }
};
