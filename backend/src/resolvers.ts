import { PolicyModel } from "./models/PolicyModel";

export const resolvers = {
  Query: {
    getAllPolicies: async () => {
      const results = await PolicyModel.find({});
      return {
        results: results,
      }
    }
  },
};

export { }