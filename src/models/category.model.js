import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true
    },
});

export const Category = mongoose.model('Category', categorySchema);