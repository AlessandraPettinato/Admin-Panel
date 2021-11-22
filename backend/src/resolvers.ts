const PolicyModel = require("./models/PolicyModel")

const resolvers = {
  Query: {
    getAllPolicies: async () => {
      const results = await PolicyModel.find({});
      return {
        result: results,
      }
    }
  },
};

module.exports = resolvers;

export { }