import mongoose from "mongoose";

require("dotenv").config();
const dbUrl: string = process.env.DB_URI || "";

const connectDb =async () => {
     try {
          const response = await mongoose.connect(dbUrl);
          console.log(`Databse is connected to: ${response.connection.host}`);
     } catch (error: any) {
          console.log(error.message);
          setTimeout(connectDb, 5000);
     }
}

export default connectDb;