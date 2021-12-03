const mongoose = require("mongoose");
require("dotenv").config();

const databaseURL: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.kveob.mongodb.net/Data?retryWrites=true&w=majority`;

const dbconnection: any = mongoose.connect(databaseURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = dbconnection;
