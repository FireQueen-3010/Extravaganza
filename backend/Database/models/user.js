const mongoose = require("mongoose");

const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes("password"))
        throw new Error("password cannot contain password!");
    },
    trim: true,
    minlength: 8,
  },
  mood: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 18) {
        throw new error("You must be at least 18 years old");
      }
    },
  },
});

module.exports = User;
