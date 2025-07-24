const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Ensure db.js connects to MongoDB
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("Jai Bhawani");
});
const personRoutes = require("./routes/personRoutes"); // Import person routes
app.use("/person", personRoutes); // Use person routes under /api path
const menuItemsRoutes = require("./routes/menuItemsRoutes"); // Import menu items routes
app.use("/menuItems", menuItemsRoutes); // Use menu items routes under /menuItems

// start server on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// import express from "express";

// const app = express();
// const db = require("./db");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// const Person = require("./models/person");

// app.get("/", (req, res) => {
//   res.send("Jai Bhawani");
// });
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // assume the body parser contains the person data
//     const newPerson = new Person(data); // create a new person document using mongoose model
//     const response = await newPerson.save(); // save the new person document to the database
//     console.log("data saved");
//     res.status(200).json(response); // send the saved person data as a response
//   } catch (err) {
//     console.error("Error saving person:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// cconst  newPerson = new Person(data); // create a new person document using mongoose model
// newPerson.save((err, person) => {
//   if (err) {
//     console.error("Error saving person:", err);
//     res.status(500).json({ error: "Error saving person" });
//   } else {
//     console.log("Data saved successfully:", person);
//     res.status(200).json(person);
//   }
// });

//   const data = req.body; //assume the body parser contain the person data
// });
//create a new person documnet using mongoose model
// const newPreson = new personalbar(data);
// //save the new person document to the database
// newPreson.save((err, person) => {
//   if (err) {
//     console.error("Error saving person:", err);
//     res.status(500).json({ err: "Error saving person" });
//   } else {
//     console.log("data saved successfully:");
//     res.status(200), json(savedperson);
//   }
// });
// newPreson.name = data.name;
// newPreson.age = data.age;
// newPreson.work = data.work;
// newPreson.mobile = data.mobile;

// app.get("/studentdata", (req, res) => {
//   let age = 25;
//   res.send(age);
// });

// app.get("/studentdata", (req, res) => {
//   const student1 = {
//     name: "John Doe",
//     age: 20,
//     course: "Computer Science",
//   };
//   res.send(student1);
// });
// app.post("/person", (req, res) => {
//   res.send("Person data received");
//   //res.send("Person data received");
// });

//app.listen(3000, () => {
// console.log("Server is running on port 3000");
//});
