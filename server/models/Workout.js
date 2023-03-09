const { Schema, model } = require('mongoose');


const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema(
  {
    workoutTitle: {
      type: String,
      required: 'You need create a title!',
      minlength: 1,
      maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Activity'
      }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Workout = model('Workout', workoutSchema);

module.exports = Workout;
