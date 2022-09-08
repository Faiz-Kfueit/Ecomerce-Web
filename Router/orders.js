const express = require("express");
const router = express.Router();

router.get("/orders", (req, res) => {
  res.send("get orders router running");
});

router.post("/orders", (req, res) => {
  res.send("post orders router running");
});

router.put("/orders", (req, res) => {
  res.send("put orders router running");
});

router.delete("/orders", (req, res) => {
  res.send("delete orders router running");
});
module.exports = router;
