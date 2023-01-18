const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

const userRoutes = require("./routes/userRoutes");

// routes for user
app.use("/api/auth", userRoutes);

// connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://rokto:FbJv4VIMXMO85rHo@cluster0.tl659rj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, (req, res) => {
      console.log("The Roktobondhu app is running on port : ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
