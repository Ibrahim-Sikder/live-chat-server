const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected!");
  } catch (err) {
    console.log("Database not connected!");
  }
}

module.exports = connectDB;
