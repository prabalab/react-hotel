const express = require("express");
const Room = require("../models/Room");

const router = express.Router();

// Get all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rooms" });
  }
});

// Add a new room
router.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;
    const newRoom = new Room({ name, price });
    await newRoom.save();
    res.status(201).json({ message: "Room added successfully", room: newRoom });
  } catch (err) {
    res.status(500).json({ error: "Error adding room" });
  }
});

module.exports = router;
