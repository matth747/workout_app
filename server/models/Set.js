const { Schema } = require('mongoose');

const setSchema = new Schema(
  {
    weight: {
      type: String,
      required: false,

    },
    reps: {
      type: String,
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
