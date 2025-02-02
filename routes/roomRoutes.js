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

// Delete a room by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting room" });
  }
});

module.exports = router;
