const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body; 

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Please enter all fields' });
    return;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name, 
      email: user.email,
      token: generateToken(user._id, user.name), 
      message: 'Account created successfully!',
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name, 
      email: user.email,
      token: generateToken(user._id, user.name), 
      message: 'Logged in successfully!',
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};