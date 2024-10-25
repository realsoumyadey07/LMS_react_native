import { IUser } from "../models/user.model";

require("dotenv").config();

interface ITokenOptions {
     expires: Date;
     maxAge: number;
     httpOnly: boolean;
     sameSite: "lax" | "strict" | "none" | undefined;
     secure?: boolean;
}

export const sendToken = (user: IUser, statusCode: number)=> {

}