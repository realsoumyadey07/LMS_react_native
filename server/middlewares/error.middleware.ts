import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction)=> {
     err.statusCode = err.statusCode || 500;
     err.message = err.message || "Internal server error";
     //wrong mongodb id!
     if(err.name === "CastError"){
          const message = `Resource not found. Invalid! ${err.path}`;
          err = new ErrorHandler(message, 400);
     }
     //duplicate key!
     if(err.code === 1100){
          const message = `Duplicate key: ${err.path} entered!`;
          err = new ErrorHandler(message, 400);
     }
     //wrong jwt error!
     if(err.name === "JsonWebTokenError"){
          const message = "Invalid token! try again";
          err = new ErrorHandler(message, 400);
     }
     //JWT expired error
     if(err.name === "TokenExpireError"){
          const message = "Json web token is expired!";
          err = new ErrorHandler(message, 400);
     }
     res.status(err.statusCode).json({
          success: false,
          message: err.message
     })
}