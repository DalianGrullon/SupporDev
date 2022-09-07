const { AuthenticationError } = require('apollo-server-express');
const { Request, Requester, Developer } = require('../models/index');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    requests: async () => {
      return await Request.find().populate('requester');
    },
    requester: async (parent, { _id }) => {
      return await Requester.findById(_id).populate('requests');
    },
    request: async (parent, { _id }) => {
      return await Request.findById(_id).populate('requester');
    }
  },
  Mutation: {
    addRequester: async (parent, args) => {
      const requester = await Requester.create(args);
      const token = signToken(requester);

      return { token, requester };
    },
    addDeveloper: async (parent, args) => {
      const developer = await Developer.create(args);
      const token = signToken(developer);

      return { token, developer };
    },
    addRequest: async (parent, args, context) => {
      const request = await Request.create({
        title: args.title,
        description: args.description,
        requester: context.user._id
      });
      const requester = await Requester.findOneAndUpdate(
        { _id: context.user._id },
        { $push: { requests: request._id } }
      );

      return await Request.findById(request._id).populate('requester');
    },
    requesterLogin: async (parent, { email, password }) => {
      const requester = await Requester.findOne({ email });

      if (!requester) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await requester.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(requester);

      return { token, requester };
    },
    developerLogin: async (parent, { email, password }) => {
      const developer = await Developer.findOne({ email });

      if (!developer) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await developer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(developer);

      return { token, developer };
    },
    updateRequest: async (parent, args) => {
      const request = await Request.findByIdAndUpdate(
        args._id,
        args,
        { new: true }
      )
      return request;
    },
    deleteRequest: async (parent, { _id }) => {
      const request = await Request.findByIdAndDelete(_id)

      return request;
    }
  }
};

module.exports = resolvers;
