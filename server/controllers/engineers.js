import expressAsyncHandler from "express-async-handler";
import Engineers from "../models/engineersModal.js";

export const addEngineers = expressAsyncHandler(async (req, res) => {

    const { name, description, number, instagram, whatsapp,email,image, facebook, linkedin } = req.body.userData;
    console.log(req.body.userData)

    const user = await Engineers.create({
        name,
        description,
        number,
        instagram,
        whatsapp,
        facebook,
        linkedin,
        email,
        image
    })
    console.log(user)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// Get All Engineers
export const getAllEngineers = expressAsyncHandler(async (req, res) => {
    const engineers = await Engineers.find({});
    
    if (engineers) {
        res.status(200).json(engineers);
    } else {
        res.status(404);
        throw new Error("Engineers not found");
    }
});