const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Activity } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    createWorkout: async (parent, args, context) => {
      if (context.user)
      {
      const newWorkout = await Workout.create({ ...args, username: context.user.username});
      return newWorkout;
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    createActivity: async (parent, args, context) => {
      if (context.user) {
        const updatedWorkout = await Activity.create({ ...args, username: context.user.username});

        return updatedWorkout;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addSet: async (parent, {  activityId, weight, reps }, context) => {
      if (context.user) {
        const updatedActivity = await Activity.findOneAndUpdate(
          { _id: activityId },
          { $push: { sets: { weight, reps, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedActivity;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

  }
};

module.exports = resolvers;
