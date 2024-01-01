import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404)
    throw new Error("credentials missing or invalid");
  }

  const user = await User.findOne({ email })

  if (user && await user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.userName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(404);
    res.json({ message: "Invalid Username or Password" });
  }
});


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {

  const { userName, email, password, contact} = req.body.userData;
  console.log(req.body.userData)
  if (!userName || !email || !password || !contact) {
    res.status(404)
    throw new Error("credentials missing or invalid");
  }

  const userExists = await User.findOne({ email })

  if (userExists) return res.status(400).json({ message: 'User with this email already exists' });



  const user = await User.create({
    userName,
    email,
    password,
    contactno: contact,
  })
console.log(user)
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
  try {
    const customOrder = { seller: 0, user: 1, admin: 2 };

    // Find and sort the documents in the User collection
    const sortedUsers = await User.find({})
      .sort({ role: 1 }) // Sort in ascending order based on "role"
      .exec();
    sortedUsers.sort((a, b) => customOrder[a.role] - customOrder[b.role]);

    res.status(200).json(sortedUsers)
  } catch (error) {
    res.status(400)
    throw new Error("Something went wrong")
  }

})