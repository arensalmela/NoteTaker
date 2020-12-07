// Dependencies

const express = require("express");
const path = require("path");

const app = express();

//Setting an initial port
const PORT = 8080;

//Setting up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
