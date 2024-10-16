require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();


app.use(express.json({limit: "50mb"}));
app.use(cookieParser());
//Cross Origin Resource Sharing
app.use(cors({
     origin: process.env.ORIGIN
})); 

app.get("/test", (req: Request, res: Response) => {
     res.status(200).json({
          success: true,
          message: "Ok tested!"
     })
});

app.all("*", (req: Request, res: Response, next: NextFunction)=> {
     const err = new Error(`Route ${req.originalUrl} is not found`) as any;
     err.statusCode = 404;
     next(err);
})