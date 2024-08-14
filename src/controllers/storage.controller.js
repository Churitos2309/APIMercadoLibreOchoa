import { Storage } from '../models/storage.model.js';

export const addStorage = async (req, res) => {
    try {
      console.log("req.body:", req.body);
      const { url, filename } = req.body;
      console.log("url:", url);
      console.log("filename:", filename);
  
      if (!url || !filename) {
        return res.status(400).json({ message: "Faltan campos requeridos" });
      }
  
      const newStorage = new Storage({
        url,
        filename
      });
  
      const savedStorage = await newStorage.save();
      res.status(201).json(savedStorage);
    } catch (error) {
      console.log("Error adding the storage", error);
      res.status(500).json({ message: "Error adding the storage" });
    }
  };

export const getStorage = async(req,res)=>{
    try {
        const storage = await Storage.find();
        res.status(200).json(storage)
    } catch (error) {
        console.log("Error fetching the storage", error);
        res.status(500).json({ message: "Error fetching the storage" });
    }
};

export const getStorageById = async (req, res) => {
    try {
        const { id } = req.params; 

        const storage = await Storage.findById(id);

        if (!storage) {
            return res.status(404).json({ message: "Storage not found" });
        }

        res.status(200).json(storage);
    } catch (error) {
        console.log("Error fetching the storage", error);
        res.status(500).json({ message: "Error fetching the storage" });
    }
};

export const updateStorage = async (req, res) => {
    try {
        const { id } = req.params; 
        const { url, filename } = req.body; 

        const updatedStorage = await Storage.findByIdAndUpdate(
            id,
            { url, filename },
            { new: true } 
        );

        if (!updatedStorage) {
            return res.status(404).json({ message: "Storage not found" });
        }

        res.status(200).json(updatedStorage);
    } catch (error) {
        console.log("Error updating the storage", error);
        res.status(500).json({ message: "Error updating the storage" });
    }
};

export const deleteStorage = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStorage = await Storage.findByIdAndDelete(id);

        if (!deletedStorage) {
            return res.status(404).json({ message: "Storage not found" });
        }

        res.status(200).json({ message: "Storage deleted successfully" });
    } catch (error) {
        console.log("Error deleting the storage", error);
        res.status(500).json({ message: "Error deleting the storage" });
    }
};