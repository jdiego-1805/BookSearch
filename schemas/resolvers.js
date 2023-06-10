const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    async getAllTech(parent, args, context) {
      const allTech = await Tech.find({});
  
      if (!allTech) {
        throw new Error('No technology found!');
      }
      return allTech;
    },
    async getMatchups(parent, {id}, context) {
      const matchup = await Matchup.find({});
  
      if (!matchup) {
        throw new Error('No matchup found by that id!');
      }
  
      return matchup;
    },
    async getAllMatchups(parent, args, context) {
      const allMatchups = await Matchup.find({});
  
      if (!allMatchups) {
        throw new Error('No matchups found!');
      }
  
      return allMatchups;
    },
  },

Mutation: {
  createUser: async (parent, args, context) => {
      return await User.create({ username, email, password });
    },
  },
  saveBook: async (parent, args, context) => {
    const user = await User.findById(userId);
    if (!saveBook) {
      throw new Error('Book not found');
    }

    user.savedBooks.push(book);
    await user.save();

    return user;
  },
};

module.exports = resolvers;
