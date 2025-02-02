const express = require("express");
const Home = require("../models/homeModel"); // Import the model

const router = express.Router();

// Fetch Home Data
router.get("/", async (req, res) => {
  try {
    const homeData = await Home.findOne();
    res.json(homeData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching home data" });
  }
});

// Insert Home Data
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newHome = new Home({ title, description });
    await newHome.save();

    res.status(201).json({ message: "Home data inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error inserting home data" });
  }
});

module.exports = router;
