const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://santhoshsai:santhoshsai@mongodb.rna13qy.mongodb.net/tododb?retryWrites=true&w=majority"
  );
};


mongoose.connection.once("open", () => console.log("MongoDB connection is on"))

module.exports = connectDb;