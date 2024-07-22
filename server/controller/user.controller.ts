import { Request, Response, NextFunction } from "express";
import { IUser, userModel } from "../models/user.model";
import jwt, { Secret } from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler";
import catchAsyncError from "../middleware/catchAsyncError";
require("dotenv").config();
import ejs from "ejs";
import path from "path";
import { sendMail } from "../utils/sendMail";

//register user

interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export const registrationUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, avatar } = req.body as IRegistrationBody;
      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
        return next(new ErrorHandler("Email already exist", 400));
      }
      const user: IRegistrationBody = {
        name,
        email,
        password,
      };
      const activationToken = createActivationToken(user);

      const activationCode = activationToken.activationCode;
      const data = { user: { name: user.name }, activationCode };
      const html: string = await ejs.renderFile(
        path.join(__dirname, "../mails/activation-mail.ejs"),
        data
      );
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          template: "activation-mail.ejs",
          data,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email: ${user.email} to activate your account!`,
          activationToken: activationToken.token,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 400))
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

interface IActivationToken {
  token: string;
  activationCode: string;
}
export const createActivationToken = (user: any): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );
  return { activationCode, token };
};


//activate user
interface IActivationRequest {
  activation_token: string;
  activation_code: string;
}

export const activateUser = catchAsyncError(async(req: Request, res: Response, next: NextFunction)=> {
  try {
    const { activation_code, activation_token } = req.body as IActivationRequest;
    const newUser: { user: IUser; activationCode: string} = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET as string
    ) as {user: IUser; activationCode: string}

    if (newUser.activationCode!== activation_code) {
      return next(new ErrorHandler("Invalid activation code", 400));
    }
    const {name, email, password} = newUser.user;
    const existUser = await userModel.findOne({email});

    if(existUser){
      return next(new ErrorHandler("Email already exist", 400));
    }
    const user = await userModel.create({
      name,
      email,
      password
    });
    res.status(200).json({
      success: true
    })
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 400))
  }
})

//login user

interface ILoginRequest {
  email: string;
  password: string;
}

export const loginUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const { email, password } = req.body as ILoginRequest;
    if([email, password].some((i)=>i==="")){
      next(new ErrorHandler("Email and Password is required", 400));
    }

    const user = await userModel.findOne({email}).select("+password");

    if(!user){
      return next(new ErrorHandler("Invalid emailo or password", 400));
    }
    const isPasswordMatch = await user.comparePassword(password);

    if(!isPasswordMatch){
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    

  } catch (error: any) {
    return next(new ErrorHandler(error.message, 400))
  }
})