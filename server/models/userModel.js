import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  isAdmin: { // Change 'role' to 'isAdmin'
    type: Boolean, // Change the type to Boolean
    default: false, // Set the default value to false
  },
  architecture: { // Change 'role' to 'isAdmin'
    type: Boolean, // Change the type to Boolean
    default: true, // Set the default value to false
  },
  engineer: { // Change 'role' to 'isAdmin'
    type: Boolean, // Change the type to Boolean
    default: true, // Set the default value to false
  },
  image:{
    type: String,
    default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwfuKH8tRdnMih5eqkr_-Tze9tdKIAFSRIP91ykO_5AXLbo3mhoPh02IE6uNuPeMekdU&usqp=CAU'
  },
  
  instagram: {
    type: String,
   
  },
  facebook: {
    type: String,
   
  },
  whatsapp: {
    type: String,
   
  },
  linkedin: {
    type: String,
   
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema);
export default User