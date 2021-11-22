import { PolicyModel } from "./models/PolicyModel";

const resolvers = {
  Query: {
    getAllPolicies: async () => {
      const results = await PolicyModel.find({});
      return {
        results: results,
      }
    }
  },
};

module.exports = resolvers;

export { }
