const express = require("express");
const router = express.Router();
router.get("/users", (req, res) => {
  res.send("get users router running");
});

router.post("/users", (req, res) => {
  res.send("post users router running");
});

router.put("/users", (req, res) => {
  res.send("put users router running");
});

router.delete("/users", (req, res) => {
  res.send("delete users router running");
});
module.exports = router;
