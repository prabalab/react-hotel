require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/bookingRoutes");
const path = require("path");
const roomRoutes = require("./routes/roomRoutes");
const homeRoutes = require("./routes/homeRoutes"); // Import routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the main React page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("DB Connection Error:", err));

// Use Routes
app.use("/api/bookings", bookingRoutes);

//booking data 
app.get("/show-booking", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "showbooking.html"));
});

app.use("/api/rooms", roomRoutes); // Mount rooms API

// Use Home Routes
app.use("/api/home", homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
