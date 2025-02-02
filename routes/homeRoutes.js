const express = require("express");
const Home = require("../models/homeModel"); // Import the model

const router = express.Router();

// API Endpoint to Fetch Home Data
router.get("/", async (req, res) => {
  try {
    const homeData = await Home.findOne();
    res.json(homeData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching home data" });
  }
});

module.exports = router;
