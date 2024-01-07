require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

/// connect to database
connectDB();

const app = express();

// Use CORS middleware
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/travel", require("./routes/travelRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`The seerver is running on ${PORT}`));
