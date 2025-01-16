import authRoutes from "./routes/auth";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use(passport.initialize());

// Other middleware and routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
