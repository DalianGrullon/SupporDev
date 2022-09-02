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
    }
    // categories: async () => {
    //   return await Category.find();
    // },
    // products: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await Product.find(params).populate('category');
    // },
    // product: async (parent, { _id }) => {
    //   return await Product.findById(_id).populate('category');
    // },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
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
    addRequest: async (parent, args) => {
      const request = await Request.create(args);
      const requester = await Requester.findOneAndUpdate(
        { _id: args.requester },
        { $push: { requests: request._id } }
      );

      return await Request.findById(request._id).populate('requester');
    }
  //   addOrder: async (parent, { products }, context) => {
  //     console.log(context);
  //     if (context.user) {
  //       const order = new Order({ products });

  //       await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

  //       return order;
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   updateUser: async (parent, args, context) => {
  //     if (context.user) {
  //       return await User.findByIdAndUpdate(context.user._id, args, { new: true });
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   updateProduct: async (parent, { _id, quantity }) => {
  //     const decrement = Math.abs(quantity) * -1;

  //     return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
  //   },
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);

  //     return { token, user };
  //   }
    },
  requesterLogin: async (parent, args, context) => {
    const requester= await Requester.findOne({ email });

    if (!requester) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await requester.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(requester);

    return { token, requester};
  },
    developerLogin: async (parent, args, context) => {
      const developer= await Developer.findOne({ email });

      if (!developer) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await developer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(developer);

      return { token, developer};
    }
  }
};

module.exports = resolvers;
