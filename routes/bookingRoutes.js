const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingModel");

// API Route: Add Booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking successful", data: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Booking failed" });
  }
});

// API Route: Get All Bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

module.exports = router;
