import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT, MONGO_URL } = process.env;

app.get("/users", async (req, res) => {
  connectDB();

  try {
    const userDoc = await User.find();
    res.json({ userDoc });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

app.post("/users", async (req, res) => {
  connectDB();

  try {
    const newUserDoc = await User.create({
      name: "Giancarlo",
      email: "gian6155@gmail.com",
      password: "123456",
    });

    res.json({ newUserDoc });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
