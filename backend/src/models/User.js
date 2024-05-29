const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  phone: {
    type: String,
    unique: true,
  },
  year: {
    type: String,
    unique: true,
  },
  month: {
    type: String,
    unique: true,
  },
  day: {
    type: String,
    unique: true,
  },
  men: {
    type: String,
    unique: true,
  },
  women: {
    type: String,
    unique: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
