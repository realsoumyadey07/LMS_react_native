import express from "express";
import { 
     activateUser, 
     loginUser, 
     logoutUser, 
     registrationUser 
} from "../controller/user.controller";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser);
userRouter.get("/logout-user", logoutUser);

export default userRouter;