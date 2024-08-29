"use strict";

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Routes = require("./Routes/Routes.jsx");
const { decryptMiddleware } = require("./Encryption-Decryption/encrypt-decrypt.jsx");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

// Use the decryptMiddleware before handling routes
app.use(decryptMiddleware);

// Setup routes
app.use(Routes());

// Start the server
app.listen(PORT, async () => {
  console.log(`Listening at ${PORT}`);
});
