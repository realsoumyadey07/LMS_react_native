require("dotenv").config();
import {app} from "./app";
import connectDb from "./utils/db";

const port = process.env.PORT || 8000;
app.listen(port, ()=> {
     console.log(`Server is running on: ${port}`);
     connectDb();
})