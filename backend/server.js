import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import process from "process";

dotenv.config({ path: "../server/config.env" });

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.ATLAS_URI);

async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
}
connectDB();

const db = client.db("PokeFetch");
const userCollection = db.collection("Users");

app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "User already exists." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userCollection.insertOne({
    username,
    password: hashedPassword,
    role: role || "user",
  });

  res.json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userCollection.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ username: user.username, role: user.role });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
