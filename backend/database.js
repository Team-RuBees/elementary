const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Database
const database = (module.exports = () => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    try {
        mongoose.connect(
          "mongodb+srv://acelmargallo04:MkfhoIf8tNp0yB7u@cluster0.yw4ydrg.mongodb.net/?retryWrites=true&w=majority",
          connectionParams
        );
        console.log("Database connected succesfully");
      } catch (error) {
        console.log(error);
        console.log("Database connection failed");
      }
    });
    
    database();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });