import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
mongoose.connect(process.env.DB_CONNECTION_STRING as string);

export const db = mongoose.connection;