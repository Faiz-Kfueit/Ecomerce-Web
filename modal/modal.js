const express = require("express");
const { default: mongoose, mongo } = require("mongoose");

const movie = new mongoose.Schema({
  title: string,
});

module.exports = mongoose.model("Movie", movie);
