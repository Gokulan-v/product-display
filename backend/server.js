import express, { response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();


app.get("/",(req,res) => {
})
console.log(process.env.MONGO_URI);

app.listen(5000, async () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});
 