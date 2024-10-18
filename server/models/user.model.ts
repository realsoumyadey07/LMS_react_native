import mongoose, { Document, Model, Schema } from "mongoose";
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export interface IUser extends Document {
     name: string;
     email: string;
     password: string;
     avatar?: {
          public_id: string,
          url: string
     },
     role: string;
     isVerified: boolean;
     courses: Array<{courseId: string}>;
     comparePassword: (password: string)=> Promise<boolean>;
     signAccessToken: ()=> string;
     signRefreshToken: ()=> string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          unique: true,
          required: [true, "Please enter your email!"],
          validate: {
               validator: function(value: string) {
                    return emailRegex.test(value);
               }
          }
     },
     password: {
          type: String,
          require: [true, "Please enter a password here"],
          minLength: [6, "Password must be at least of 6 characters!"],
          select: false
     },
     avatar: {
          public_id: String,
          url: String
     },
     role: {
          type: String,
          default: "user"
     },
     isVerified: {
          type: Boolean,
          default: false
     },
     courses: [{
          courseId: String
     }]
}, {timestamps: true});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);