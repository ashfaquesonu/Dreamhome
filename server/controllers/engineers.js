import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// export const addEngineers = expressAsyncHandler(async (req, res) => {

//     const { name, description, number, instagram, whatsapp,email,image, facebook, linkedin } = req.body.userData;
//     console.log(req.body.userData)

//     const user = await Engineers.create({
//         name,
//         description,
//         number,
//         instagram,
//         whatsapp,
//         facebook,
//         linkedin,
//         email,
//         image
//     })
//     console.log(user)
//     if (user) {
//         res.status(200).json(user)
//     } else {
//         res.status(400)
//         throw new Error("Invalid user data")
//     }
// })

// Get All Engineers
export const getAllEngineers = expressAsyncHandler(async (req, res) => {
    try {
        const engineers = await User.find({ engineer: true });
        console.log(engineers)
        if (engineers) {
            res.status(200).json(engineers);
        } else {
            res.status(404);
            throw new Error("Engineers not found");
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update Engineer
export const updateEngineer = expressAsyncHandler(async (req, res) => {
    const userId = req.params.id;
    console.log(req.body);
    const {userName, description, contactno, instagram, whatsapp, email, image, facebook, linkedin } = req.body.userData;

    const updatedEngineer = await User.findByIdAndUpdate(
        userId,
        {
            userName,
            description,
            contactno,
            instagram,
            whatsapp,
            facebook,
            linkedin,
            email,
            image
        },
        { new: true } // Return the updated document
    );

    if (updatedEngineer) {
        res.status(200).json(updatedEngineer);
    } else {
        res.status(404);
        throw new Error("Engineer not found");
    }
});
// Delete Engineer
export const deleteEngineer = expressAsyncHandler(async (req, res) => {
    const userId = req.params.id;

    const deletedEngineer = await User.findByIdAndDelete(userId);

    if (deletedEngineer) {
        res.status(200).json({ message: "Engineer deleted successfully" });
    } else {
        res.status(404);
        throw new Error("Engineer not found");
    }
});
