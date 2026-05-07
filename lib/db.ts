/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "@/config";
import mongoose from "mongoose";

const connectionURL = config.server_url as string;

if (!connectionURL) {
  throw new Error("Database connection URL is not defined");
};

// cache the connection to prevent multiple connections in development
const cachedConnection = (global as any).mongoose || {
    conn: null,
    promise: null
};

const connectDB = async () => {
    if (cachedConnection.conn) return cachedConnection.conn;
    
 

    cachedConnection.conn = await cachedConnection.promise;
    return cachedConnection.conn;
};

export default connectDB;

mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB Error:", err);
});