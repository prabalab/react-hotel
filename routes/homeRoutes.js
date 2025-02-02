const express = require("express");
const Home = require("../models/homeModel");
const router = express.Router();

// GET all home data
router.get("/", async (req, res) => {
  try {
    const homes = await Home.find();
    res.json(homes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new home data
router.post("/", async (req, res) => {
  const home = new Home(req.body);
  try {
    await home.save();
    res.json({ message: "Data inserted successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update home data
router.put("/:id", async (req, res) => {
  try {
    const home = await Home.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!home) return res.status(404).json({ message: "Data not found" });
    res.json({ message: "Data updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE home data
router.delete("/:id", async (req, res) => {
  try {
    const home = await Home.findByIdAndDelete(req.params.id);
    if (!home) return res.status(404).json({ message: "Data not found" });
    res.json({ message: "Data deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
