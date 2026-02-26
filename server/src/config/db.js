import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("mongodb connected")
    })
    mongoose.connection.on("disconnected", () => {
      console.log("mongodb disconnected")
    })
    mongoose.connection.on("error", (error) => {
      console.log("mongodb connection error", error.message)
      process.exit(1);
    })
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "Postly"
    })
  } catch (error) {
    console.log(error);
  }
}