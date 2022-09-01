const { Requester, Request } = require('../models');

const resolvers = {
  Query: {
    requester: async () => {
      return Requester.find();
    },

    requester: async (parent, { requesterId }) => {
      return Requester.findOne({ _id: requesterId });
    },
  },

  Mutation: {
    addRequester: async (parent, { userName }) => {
      return Requester.create({ userName });
    }
    // addrequest: async (parent, { requesterId, request }) => {
    //   return Requester.findOneAndUpdate(
    //     { _id: requesterId },
    //     {
    //       $addToSet: { request: request },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
      // );
    // },
    // removeRequester: async (parent, { requesterId }) => {
    //   return Requester.findOneAndDelete({ _id: requesterId });
    // },
    // removeRequest: async (parent, { requesterId, request }) => {
    //   return Requester.findOneAndUpdate(
    //     { _id: requesterId },
    //     { $pull: { request: request } },
    //     { new: true }
  }
}

  

module.exports = resolvers;
