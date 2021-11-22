const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
    id: { type: String },
    customer: {
        firstName: { type: String },
        lastName: { type: String },
        dateOfBirth: { type: String }
    },
    provider: String,
    insuranceType: String,
    status: String,
    policyNumber: String,
    startDate: String,
    endDate: String,
    createdAt: String
})

const PolicyModel = mongoose.model("Policy", PolicySchema);

module.exports = PolicyModel;