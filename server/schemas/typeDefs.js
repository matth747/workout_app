const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }
  type Workout {
    _id: ID
    workoutTitle: String
    createdAt: String
    username: String
    activities: [Activity]
  }
  type Activity {
    _id: ID
    activityName: String
    username: String
    sets: [Set]
  }
  type Set {
    _id: ID
    weight: String
    reps: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    workout(workoutId: ID!): Workout 


  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createWorkout(workoutTitle: String): Workout
    createActivity(workoutId: ID!, activityName: String): Activity
    addSet(activityId: ID!, weight: String, reps: String): Activity
  }
`;

module.exports = typeDefs;
