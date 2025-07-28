// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const person = require("./models/person");
// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     // Logic for local authentication
//     // This is a placeholder; you would typically check the database here
//     try {
//       console.log("Received credentials:", username, password);
//       const user = await person.findOne({ username: username });
//       if (!user) {
//         return done(null, false, { message: "Incorrect username." });
//       }
//       const isPasswordMatch =
//         user.comparePassword(password) === password ? true : false;
//       if (isPasswordMatch) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Incorrect Password." });
//       }
//     } catch (err) {
//       return done(err);
//     }
//   })
// );
// module.exports = passport;
