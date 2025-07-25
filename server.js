const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Ensure db.js connects to MongoDB
const app = express();
const PORT = 3000;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// Middleware to parse JSON request bodies
app.use(bodyParser.json());
const person = require("./models/person"); // Import the person model

//middleware function
const longRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );

  next(); // Call the next middleware or route handler
};
app.use(longRequest); // Use the middleware for all routes
passport.use(
  new LocalStrategy(async (username, password, done) => {
    // Logic for local authentication
    // This is a placeholder; you would typically check the database here
    try {
      console.log("Received credentials:", username, password);
      const user = await person.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const isPasswordMatch = user.password === password ? true : false;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password." });
      }
    } catch (err) {
      return done(err);
    }
  })
);
app.use(passport.initialize());

app.get(
  "/",
  passport.authenticate("local", { session: false }),
  function (req, res) {
    res.send("Welcome to our hotel");
  }
);

// Root route
// app.get("/", (req, res) => {
//   res.send("Jai Bhawani");
// });
const personRoutes = require("./routes/personRoutes"); // Import person routes
app.use("/person", personRoutes); // Use person routes under /api path
const menuItemsRoutes = require("./routes/menuItemsRoutes"); // Import menu items routes
app.use("/menuItems", menuItemsRoutes); // Use menu items routes under /menuItems

// start server on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
