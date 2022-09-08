const express = require("express");
const router = express.Router();

router.get("/movie", (req, res) => {
  res.send("get movie router running");
});

router.put("/movie", (req, res) => {
  res.send(" put movie router running");
});

router.post("/movie", (req, res) => {
  res.send("post movie router running");
});

router.delete("/movie", (req, res) => {
  res.send(" delete movie router running");
});

module.exports = router;
