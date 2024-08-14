import { Router } from "express";
const categoryRoutes = Router();

// controllers
import { addCategory,getCategory,getCategoryById,updateCategory,deleteCategory} from "../controllers/category.controller.js";
//Add Category
categoryRoutes.post("/category", addCategory);
//Get Category
categoryRoutes.get("/category", getCategory);
//Get Category Of Id
categoryRoutes.get("/category/:id", getCategoryById);
//Put Category Of Id
categoryRoutes.put("/category/:id", updateCategory);
//Delete Category Of Id
categoryRoutes.delete("/category/:id", deleteCategory);
export default categoryRoutes;