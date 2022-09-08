const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv:testuser1:testuser1@cluster0.n07unot.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connect");
};

module.exports = connect;
