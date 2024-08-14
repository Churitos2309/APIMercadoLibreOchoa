import cors from 'cors';
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import categoryRoutes from './routers/category.routes.js';
import productRoutes from './routers/product.routes.js';
import storageRoutes from './routers/storage.routes.js';
import userRoutes from "./routers/user.routes.js";
config();

const app = express();  
app.use(cors({origin:'*',credentials:true}))
const port = process.env.PORT || 7000;

app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', storageRoutes)

app.get('/', (req,res) => {
    res.send('Bienvenidos a mi API muchachones.');
});
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connect to MongoDB Atlas"))
.catch((error)=>console.error(error));

app.listen(port,()=> console.log('server listening on port',port))