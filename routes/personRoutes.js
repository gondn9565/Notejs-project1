const express = require("express");
const router = express.Router();
const Person = require("../models/person");
// Route to add a person to the database
router.post("/Signup", async (req, res) => {
  try {
    const data = req.body; // Extract person data from request
    const newPerson = new Person(data); // Create a new Mongoose document
    const response = await newPerson.save(); // Save it to MongoDB
    console.log("Data saved:", response);
    res.status(200).json(response);
  } catch (err) {
    console.log("Error saving person:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error saving person:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:workType", async (req, res) => {
  const workType = req.params.workType; //extract the work type from the URL parameter
  try {
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType }); //find all persons with the specified work type
      console.log("response fetched");
      res.status(200).json(response); //send the response back to the client
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log("Error fetching person by work type:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //return the updated document
        runValidators: true, //run validation on the updated data
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Person updated:", response);
    res.status(200).json(response);
  } catch (err) {
    console.log("Error updating person:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Person deleted:", response);
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    console.log("Error deleting person:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Export the router to be used in the main app
module.exports = router;
