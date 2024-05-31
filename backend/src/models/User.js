const bcrypt = require("bcrypt");
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
  genders: {
    type: String,
    unique: true,
  },

  role: {
    type: Number,
    default: 0,
  },
  image: String,
});

userSchema.pre("save", async function (next) {
  let user = this;

  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }

  next();
});

userSchema.methods.comparePassword = async function (plainPassword) {
  let user = this;
  const match = bcrypt.compare(plainPassword, user.password);
  return match;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
