// Dependencies

const express = require("express");

const app = express();

//Setting an initial port
const PORT = 8080;
const htmlRoutes = require("./routes/htmlroutes.js");
//Setting up app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Routing
app.use("/", htmlRoutes);

//Adding a lister
app.listen(PORT, function () {
  console.log("App listening on Port " + PORT);
});
