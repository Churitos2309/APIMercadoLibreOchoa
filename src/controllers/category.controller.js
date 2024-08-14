import {Category} from '../models/category.model.js'

export const addCategory = async(req, res)=>{
    try {
        const {codigo,nombre} = req.body;
        const newCategory = new Category({
            codigo,
            nombre
        })
        const savedCategory = await newCategory.save()
        res.status(201).json(savedCategory)
    } catch (error) {
        console.log("Error add the category", error);
        res.status(500).json({ message: "Error adding the category" });
    }
}

export const getCategory = async(req,res)=>{
    try {
        const category = await Category.find()
        res.status(201).json(category)
    } catch (error) {
        console.log("Error fetching the category", error);
        res.status(500).json({ message: "Error fetching the category" });
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params; 
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        console.log("Error fetching the category", error);
        res.status(500).json({ message: "Error fetching the category" });
    }
};
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params; 
        const { codigo, nombre } = req.body; 

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { codigo, nombre },
            { new: true } 
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log("Error updating the category", error);
        res.status(500).json({ message: "Error updating the category" });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.log("Error deleting the category", error);
        res.status(500).json({ message: "Error deleting the category" });
    }
};
