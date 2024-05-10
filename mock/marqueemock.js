const mongoose = require("mongoose");
const Marquee = require("../models/house.model"); // Import your Marquee model
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4bmc3q8.mongodb.net/motel-develpoment-db?retryWrites=true&w=majority`
);
try {
  console.log("MongoDB connected By Mongo Client Sk Miraj!");
} catch (err) {
  console.log(err);
}

// Function to generate and save random marquee data
const generateAndSaveMarqueeData = async () => {
  try {
    // Generate random marquee data
    const randomMarqueeData = generateRandomMarquee();

    // Create a new Marquee instance with the generated data
    const newMarquee = new Marquee(randomMarqueeData);

    // Save the new Marquee to the database
    const savedMarquee = await newMarquee.save();

    console.log("Marquee data saved successfully:", savedMarquee);
  } catch (error) {
    console.error("Error saving marquee data:", error);
  } finally {
    // Disconnect from MongoDB after saving data
    mongoose.disconnect();
  }
};

// Function to generate random marquee data
const generateRandomMarquee = () => {
  const marquee = {
    author: "John Doe", // Example author name
    status: "In progress",
    marqueeType: getRandomMarqueeType(),
    location: {
      country: "United States", // Example country
      address: "123 Main Street", // Example address
      city: "New York", // Example city
      state: "NY", // Example state
      postCode: "10001", // Example postal code
    },
    capacity: getRandomNumber(50, 500), // Random capacity between 50 and 500
    size: {
      width: getRandomNumber(10, 50), // Random width between 10 and 50 meters
      length: getRandomNumber(10, 50), // Random length between 10 and 50 meters
    },
    amenities: [
      "Tables",
      "Chairs",
      "Lighting",
      "Heating",
      "Air conditioning",
      "Dance floor",
      // Add more amenities as needed
    ],
    photos: [
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg",
      "https://example.com/photo3.jpg",
      // Add more photo URLs as needed
    ],
    title: "Beautiful Marquee", // Example title
    description: "This is a beautiful marquee for your event.", // Example description
    priceAfterTaxes: getRandomNumber(100, 1000), // Random price between 100 and 1000
    authorEarnedPrice: getRandomNumber(80, 800), // Random author earned price between 80 and 800
    basePrice: getRandomNumber(90, 900), // Random base price between 90 and 900
    ratings: getRandomNumber(1, 5), // Random rating between 1 and 5
  };

  return marquee;
};

// Function to generate a random marquee type
const getRandomMarqueeType = () => {
  const marqueeTypes = ["Traditional", "Frame", "Stretch"];
  return marqueeTypes[Math.floor(Math.random() * marqueeTypes.length)];
};

// Function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

generateAndSaveMarqueeData();
