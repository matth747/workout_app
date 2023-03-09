const { Schema, model } = require('mongoose');
const setSchema = require('./Set');

const activitySchema = new Schema(
  {
    activityName: {
      type: String,
      required: true,
      maxlength: 25
    },
    username: {
      type: String,
      required: true
    },
    sets: [setSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Activity = model('Activity', activitySchema);

module.exports = Activity;