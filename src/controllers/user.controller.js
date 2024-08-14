import bcrypt from 'bcrypt';
import { User } from "../models/user.model.js";


export const addUser = async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            nombre,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error: error.message });
    }
};

export const viewUser = async (req, res) => {
    try {
        const data = await User.find({})
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const viewUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await User.findById(id)
        if (!data) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const deleteUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await User.deleteOne({ _id: id });
        if (data.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json({ message: "User successfully deleted", data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const putUser = async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        existingUser.nombre = nombre;
        existingUser.email = email;

        await existingUser.save();

        res.status(200).json({
            message: 'User successfully updated',
            user: existingUser
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};


// export const newUser = async (req,res)=>{
//     const { cedula, nombre, telefono, direccion, email,password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }
//         const newUser = new User({
//             cedula,
//             nombre,
//             telefono,
//             direccion,
//             email,
//             password
//         });
//         await newUser.save();
//         res.status(201).json({ message: 'User added successfully', user: newUser });
//     } catch (error) {
//     }
