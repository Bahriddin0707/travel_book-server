const { Router } = require("express");

const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
} = require("../controllers/TravelControllers");

const router = Router();

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getTravelById);
router.put("/:id", updateTravelBook);
router.delete("/:id", removeTravelBook);

module.exports = router;
