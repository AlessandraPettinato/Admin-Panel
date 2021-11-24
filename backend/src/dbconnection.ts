const mongoose = require("mongoose");
require('dotenv').config();

const databaseURL = `mongodb+srv://Sandra:Tokyo2018@cluster.kveob.mongodb.net/Data?retryWrites=true&w=majority`

const dbconnection = mongoose.connect(databaseURL,  { useNewUrlParser: true, useUnifiedTopology: true }); 

  module.exports = dbconnection;