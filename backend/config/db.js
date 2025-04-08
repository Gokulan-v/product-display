import { Mongoose } from "mongoose"

export const connectDB = async() => {
    try{
        const conn = await Mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`error: ${error.message}`);
        process.exit(1);

    }
};