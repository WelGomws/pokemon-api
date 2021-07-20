const express = require("express");
const app = express();
const getParamsToPokemonName = require("../index");

app.get("/health", (req, res) => {
  res.json({ health: true, version: 0 }).status(200);
});

app.get("/get-pokemon/:pokemon", getParamsToPokemonName);

app.listen(3000);
