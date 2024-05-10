const express = require("express");
const {
  getAllListing,
  getOneListing,
  getMarqueeDetails,
  saveLocation,
  saveFloorPlan,
  saveAmenities,
  savePhotos,
  saveTitle,
  saveHighlight,
  saveDescription,
  savePrices,
  saveSecurity,
  publishList,
  deleteMarquee,
} = require("../controllers/marqueeController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const router = express.Router();

router.use(express.json());

router.get("/get_all_listing", getAllListing);
router.post("/get_one_listing", getOneListing);
router.post("/get_marquee_details", verifyJwtToken, getMarqueeDetails);

router.delete("/delete_marquee/:id", verifyJwtToken, deleteMarquee);

router.post("/save_marquee_location", verifyJwtToken, saveLocation);
router.post("/save_floor_plan", verifyJwtToken, saveFloorPlan);
router.post("/save_amenities", verifyJwtToken, saveAmenities);
router.post("/save_photos", verifyJwtToken, savePhotos);
router.post("/save_title", verifyJwtToken, saveTitle);
router.post("/save_highlight", verifyJwtToken, saveHighlight);
router.post("/save_description", verifyJwtToken, saveDescription);
router.post("/save_prices", verifyJwtToken, savePrices);
router.post("/save_security", verifyJwtToken, saveSecurity);
router.post("/publish_list", verifyJwtToken, publishList);

module.exports = router;
