require('dotenv').config();
const express = require("express"); //express is coming from node_modules
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoutes');
const errorMiddlwares = require('./middleware/errorMiddlwares');
const app = express();

//grab the mongodb url
const mongo_url = process.env.MONGO_URL;

//access json data format
app.use(express.json());

//use middleware
app.use(errorMiddlwares);

//routes

app.use('/api/products', productRoute); //routes for products

app.get("/", (req, res) => {
  res.send("Hello this is Node API");
});


mongoose
  .connect(
    mongo_url
  )
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(3000, () => {
      console.log("Node API application is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
