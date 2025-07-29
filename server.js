const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Ensure db.js connects to MongoDB
const app = express();
const PORT = 3000;
const passport = require("./auth"); // Import authentication middleware
// Middleware to parse JSON request bodiesconst
app.use(bodyParser.json());

// console.log(
//   `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
// );
const longRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next();
};

app.use(longRequest); // Use the middleware for all routes

//doing authentication url
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });
// passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our hotel");
});

// Root route
// app.get("/", (req, res) => {
//   res.send("Jai Bhawani");
// });
const personRoutes = require("./routes/personRoutes"); // Import person routes
app.use("/person", localAuthMiddleware, personRoutes); // Use person routes under /api path
const menuItemsRoutes = require("./routes/menuItemsRoutes"); // Import menu items routes
app.use("/menuItems", menuItemsRoutes); // Use menu items routes under /menuItems

// start server on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
