const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect("MONGODB_URL");
};


mongoose.connection.once("open", () => console.log("MongoDB connection is on"))

module.exports = connectDb;