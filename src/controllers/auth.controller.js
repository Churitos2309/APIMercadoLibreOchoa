import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Si el usuario y contraseña son válidos, devolvemos un token de autenticación
        const token = generateToken(user);
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

const generateToken = (user) => {
    // Puedes utilizar un paquete como jsonwebtoken para generar un token
    // o crear tu propio algoritmo de generación de tokens
    return `token-${user._id}`;
};