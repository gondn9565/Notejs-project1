const mongoose = require("mongoose");
// Define the schema for a person
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});
personSchema.pre("save", async function (next) {
  const person = this;
  //hash the password only if it has modified (or is new)
  if (!person.isModified("password")) {
    return next(); // If password is not modified, skip hashing
  }
  try {
    //hash passwort generate
    const salt = await bcrypt.genSalt(10);
    //hash password
    const hashpassword = await bcrypt.hash(person.password, salt);
    person.password = hashpassword;
    next();
  } catch (err) {
    return next(err);
  }
});
personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

//create person model
const Person = mongoose.model("Person", personSchema);
//export the person model
module.exports = Person;
