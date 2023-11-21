// router.js

const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");

// Connection URL
const url = "mongodb://localhost:3000";
// Database Name
const dbName = "users_elementary";

app.use(express.json());

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Connect to MongoDB
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users_collection");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists. Please choose a different email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Sign up successful!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

router.post("/login", async (req, res) => {
  console.log('Received login request:', req.body);
  const { email, password } = req.body;

  // Connect to MongoDB
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users_collection");

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password. Please try again." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid email or password. Please try again." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

module.exports = router;
