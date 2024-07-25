import express from "express";
import { 
     activateUser, 
     loginUser, 
     logoutUser, 
     registrationUser, 
     updateAccessToken
} from "../controller/user.controller";
import {  
     isAuthenticated 
} from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser);
userRouter.get("/logout-user", isAuthenticated, logoutUser);
userRouter.get("/refreshToken", updateAccessToken);

export default userRouter;