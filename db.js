const mongoose = require("mongoose");
//define the mongodb connection url
const mongoURL = "mongodb://localhost:27017/hotels";
//set up ongodb connection
mongoose.connect("mongodb://localhost:27017/hotels", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// //define event listeners for the database connection
db.on("connected", () => {
  console.log("MongoDB connection established successfully");
});
db.on("error", (err) => {
  console.log("MongoDB connection error");
});
db.on("disconnected", () => {
  console.log("MongoDB disconnection");
});
//export the database connection
module.exports = db;
