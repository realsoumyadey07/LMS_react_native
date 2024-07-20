import { Request, Response, NextFunction } from "express";
import { userModel, IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import catchAsyncError from "../middleware/catchAsyncError";

//register user

interface IRegistrationBody {
     name: string;
     email: string;
     password: string;
     avatar?: string;
}

export const registrationUser = catchAsyncError(async(req: Request, res: Response, next: NextFunction)=>{
     try {
          const { name, email, password, avatar } = req.body as IRegistrationBody;
          const isEmailExist = await userModel.findOne({email});
          if(isEmailExist){
               return next(new ErrorHandler("Email already exist", 400));
          }
          const user:IRegistrationBody = {
               name,
               email,
               password
          }
          const activationToken = createActivationToken(user);
     } catch (error: any) {
          return next(new ErrorHandler(error.message, 400));
     }
});

export const createActivationToken = (user: IUser): I=> {

}