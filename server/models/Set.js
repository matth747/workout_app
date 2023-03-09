const { Schema } = require('mongoose');

const setSchema = new Schema(
  {
    weight: {
      type: Number,
      required: false,

    },
    reps: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = setSchema;
