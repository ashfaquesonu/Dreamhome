import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const engineersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
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
  

  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const Engineers = mongoose.model('Engineers', engineersSchema);
export default Engineers