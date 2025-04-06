const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const Db = process.env.ATLAS_URI;
  const client = new MongoClient(Db);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("PokeFetch");
    const userCollection = db.collection("Users");

    await userCollection.insertOne({
      username: "admin",
      password: "admin123",
      role: "admin",
    });
    console.log("Admin user added.");

    const user = await userCollection.findOne({ username: "admin" });
    console.log("User found:", user);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main();
