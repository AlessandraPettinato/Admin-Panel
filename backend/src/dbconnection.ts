const mongoose = require("mongoose");
require('dotenv').config();

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.zuufe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const dbconnection = async () => {
  const connection = await mongoose.connect(databaseURL,  { useNewUrlParser: true, useUnifiedTopology: true }); 

  return connection
}

  module.exports = dbconnection;