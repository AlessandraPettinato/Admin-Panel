const mongoose = require("mongoose")

const PolicySchema = new mongoose.Schema({
    customer: {
        firstName: { type: String },
        lastName: { type: String },
        dateOfBirth: { type: Date }
    },
    provider: String,
    insuranceType: {
        insuranceType: { type: String }
    },
    status: {
        policyStatus: { type: String }
    },
    policyNumber: String,
    startDate: Date,
    endDate: Date,
    createdAt: Date
})

const PolicyModel = mongoose.model("policy", PolicySchema);

module.exports = PolicyModel;