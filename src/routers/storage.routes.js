import { Router } from "express";
const storageRoutes = Router();

// controllers
import { addStorage,getStorage, getStorageById,updateStorage,deleteStorage} from '../controllers/storage.controller.js';
//Add Storage
storageRoutes.post('/storages', addStorage);
//Get Storage
storageRoutes.get('/storages', addStorage);
//Get Storage Of Id
storageRoutes.get('/storage/:id', getStorageById);
//Put Storage Of Id
storageRoutes.put('/storage/:id', updateStorage); 
//Delete Storage Of Id
storageRoutes.delete('/storage/:id', deleteStorage); 

export default storageRoutes;