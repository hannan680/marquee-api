const mongoose = require("mongoose");
const User = require("../models/user.model.js");
const Marquee = require("../models/marquee.model.js");
require("dotenv").config();

exports.getAllListing = async (req, res) => {
  try {
    const data = await Marquee.find({});

    const allListingData = data.filter((listing) => {
      return listing.status === "Complete" && listing.photos.length !== 0;
    });
    // console.log(allListingData.length)
    let response = {
      succeed: 1,
      status: 200,
      allListingData,
    };
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getOneListing = async (req, res) => {
  console.log("getting");
  try {
    const payload = req.body;
    const listingId = payload.id;

    console.log(listingId, "line 532");

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(listingId),
    };

    const listingData = await Marquee.findById(findCriteria);

    const findAuthorCriteria = {
      _id: new mongoose.Types.ObjectId(listingData.author),
    };

    const authorDetails = await User.findById(findAuthorCriteria);

    let response = {
      listing: listingData,
      listingAuthor: authorDetails,
    };

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getMarqueeDetails = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const houseDetails = await Marquee.findById(findCriteria);

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    // console.log(houseDetails, "line 447")
  } catch (error) {
    console.log(error);
  }
};

exports.saveLocation = async (req, res) => {
  console.log("trigger");
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const locationData = payload.location;

    console.log(payload, payload.location, "location payload");

    const findHouseCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      location: locationData,
    };

    if (locationData !== undefined) {
      const houseDetails = await Marquee.findOneAndUpdate(
        findHouseCriteria,
        updateCriteria,
        { new: true }
      );

      let response = {
        status: 200,
        succeed: 1,
        info: "Successfully housedata updated",
        houseDetails,
      };

      res.status(200).send(response);

      // console.log(houseDetails, "Line 98")
    }
  } catch (error) {
    console.log(error);
  }
};

exports.saveFloorPlan = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const floorplanData = payload.floorPlan;

    console.log(payload, "line 121");

    const findHouseCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      capacity: floorplanData.capacity,
      hall: floorplanData.hallNumber,
      premiumSeatingPrice: floorplanData.premiumSeatingPrice,
      stageDecorationPrice: floorplanData.stageDecorationPrice,
    };

    if (floorplanData !== undefined) {
      const houseDetails = await Marquee.findOneAndUpdate(
        findHouseCriteria,
        updateCriteria,
        { new: true }
      );

      let response = {
        status: 200,
        succeed: 1,
        info: "Successfully housedata updated",
        houseDetails,
      };

      res.status(200).send(response);

      // console.log(houseDetails, "line 134")
    }
  } catch (error) {
    console.log(error);
  }
};

exports.saveAmenities = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const amenitiesData = payload.amenities;

    const findHouseCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      amenities: amenitiesData,
    };

    if (amenitiesData !== undefined) {
      const houseDetails = await Marquee.findOneAndUpdate(
        findHouseCriteria,
        updateCriteria,
        { new: true }
      );

      let response = {
        status: 200,
        succeed: 1,
        info: "Successfully housedata updated",
        houseDetails,
      };

      res.status(200).send(response);

      // console.log(houseDetails, "line 177")
    }
  } catch (error) {
    console.log(error);
  }
};

exports.savePhotos = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const photos = payload.photos;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      photos: photos,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    console.log(houseDetails, "line 211");
  } catch (error) {
    console.log(error);
  }
};

exports.saveTitle = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const title = payload.title;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      title: title,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    // console.log(houseDetails, "line 248")
  } catch (error) {
    console.log(error);
  }
};

exports.saveHighlight = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const highlight = payload.highlight;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      highlight: highlight,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    // console.log(houseDetails, "line 282")
  } catch (error) {
    console.log(error);
  }
};

exports.saveDescription = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const description = payload.description;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      description: description,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    // console.log(houseDetails, "line 316")
  } catch (error) {
    console.log(error);
  }
};

exports.savePrices = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;

    const basePrice = payload.basePrice;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      basePrice: basePrice,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );
    console.log(houseDetails, "from 378");

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    // console.log(houseDetails, "line 386")
  } catch (error) {
    console.log(error);
  }
};

exports.saveSecurity = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;
    const security = payload.security;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      security: security,
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

exports.publishList = async (req, res) => {
  try {
    const payload = req.body;
    const houseId = payload.houseId;

    console.log(payload);

    const findCriteria = {
      _id: new mongoose.Types.ObjectId(houseId),
    };

    const updateCriteria = {
      status: "Complete",
    };

    const houseDetails = await Marquee.findOneAndUpdate(
      findCriteria,
      updateCriteria,
      { new: true }
    );

    let response = {
      status: 200,
      succeed: 1,
      info: "Successfully housedata updated",
      houseDetails,
    };

    res.status(200).send(response);

    console.log(houseDetails, "line 484");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMarquee = async (req, res) => {
  try {
    const findCriteria = {
      _id: req.params.id,
    };
    console.log(findCriteria);

    await Marquee.findOneAndDelete(findCriteria);

    let response = {
      status: 204,
      succeed: 1,
      info: "Successfully housedata deleted",
    };
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
