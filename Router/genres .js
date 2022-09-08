const express = require("express");
const router = express.Router();

router.get("/genres", (req, res) => {
  res.send("get genres router running");
});

router.post("/genres", (req, res) => {
  res.send("post genres router running");
});

router.put("/genres", (req, res) => {
  res.send("put genres router running");
});

router.delete("/genres", (req, res) => {
  res.send("delete genres router running");
});
module.exports = router;
