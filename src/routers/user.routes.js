import { Router } from 'express';
const userRoutes = Router();

// controllers
import { login } from '../controllers/auth.controller.js';
import { addUser, deleteUserId, putUser, viewUser, viewUserId } from '../controllers/user.controller.js';

//Add User
userRoutes.post("/users", addUser);
//View User
userRoutes.get("/users",viewUser);
//View User Of ID
userRoutes.get("/users/:id",viewUserId);
//Delete User Of ID
userRoutes.delete("/users/:id",deleteUserId)
//Put User Of ID
userRoutes.put("/users/:id",putUser)

userRoutes.post('/login',login);


export default userRoutes;