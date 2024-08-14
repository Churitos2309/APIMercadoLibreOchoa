import { Router } from "express";
const productRoutes = Router();

// controllers
import { addProducts,getProducts,getProductsId,updateProducts,deleteProducts} from "../controllers/product.controller.js";
//Add Product
productRoutes.post("/products", addProducts);
//View Product
productRoutes.get("/products", getProducts);
//View Product Of Id
productRoutes.get("/products/:id", getProductsId);
//Put Product Of Id
productRoutes.put("/products/:id", updateProducts);
//Delete Product Of Id
productRoutes.delete("/products/:id", deleteProducts);



export default productRoutes;
