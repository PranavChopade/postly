import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./src/config/db.js"
connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})