const router = require("express").Router();
const MenuItem = require("../models/menuItems");
// Route to add a menu item to the database
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Extract menu item data from request
    const newMenuItem = new MenuItem(data); // Create a new Mongoose document
    const response = await newMenuItem.save(); // Save it to MongoDB
    console.log("Menu item saved:", response);
    res.status(200).json(response);
  } catch (err) {
    console.log("Error saving menu item:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error fetching menu items:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:tasteType", async (req, res) => {
  const tasteType = req.params.tasteType; // Extract the taste type from the URL parameter
  try {
    if (["spicy", "sweet", "sour", "bitter", "salty"].includes(tasteType)) {
      const response = await MenuItem.find({ taste: tasteType }); // Find all menu items with the specified taste type
      console.log("Menu items fetched by taste type");
      res.status(200).json(response); // Send the response back to the client
    } else {
      res.status(400).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log("Error fetching menu items by taste type:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
// Ensure that the menuItemsRoutes.js file is properly imported in your main server file
// and that the routes are mounted correctly.
