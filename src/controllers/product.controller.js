import { Product } from '../models/product.model.js';

export const addProducts = async (req, res) => {
    try {
        const { codigo, nombre, descripcion, precio, categoria, imagen } = req.body;
        const newProduct = new Product({
            codigo,
            nombre,
            descripcion,
            precio,
            categoria,
            imagen
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log("Error adding the product", error);
        res.status(500).json({ message: "Error adding the product" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('categoria').populate('imagen');
        res.status(200).json(products);
    } catch (error) {
        console.log("Error fetching products", error);
        res.status(500).json({ message: "Error fetching products" });
    }
};


export const getProductsId = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id).populate('categoria').populate('imagen');
        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(products);
    } catch (error) {
        console.log("Error fetching products", error);
        res.status(500).json({ message: "Error fetching products" });
    }
};

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params; 
        const { codigo, nombre, descripcion, precio, categoria, imagen } = req.body; 

        const updatedProducts = await Product.findByIdAndUpdate(
            id,
            { codigo, nombre, descripcion, precio, categoria, imagen },
            { new: true } 
        );
        if (!updatedProducts) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProducts);
    } catch (error) {
        console.log("Error updating the product", error);
        res.status(500).json({ message: "Error updating the product" });
    }
};

export const deleteProducts = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedProducts = await Product.findOneAndDelete({ _id: id });
  
      if (!deletedProducts) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.log("Error deleting the product", error);
      res.status(500).json({ message: "Error deleting the product" });
    }
  };