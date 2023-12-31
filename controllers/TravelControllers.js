const Travel = require("../models/Travel.model");

// Method         GET
// Description    Get all travel books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels: travels.reverse(),
    });
  } catch (err) {
    res.send(err);
  }
};

// Method         GET
// Description    Get one travel book by id
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(200).json({ message: "success", travel });
    }
  } catch (err) {
    res.send(err);
  }
};

// Method         POST
// Description    Add new travel book
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const newTravel = await Travel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({ message: "success", newTravel });
  } catch (err) {
    res.send(err);
  }
};

// Method         PUT
// Description    EDIT travel book by id
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });

    res.status(200).json({ message: "success", updatedTravel });
  } catch (err) {
    res.send(err);
  }
};

// Method         DELETE
// Description    Delete travel book by id
const removeTravelBook = async (req, res) => {
  try {
    const deletedTravel = await Travel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
};
