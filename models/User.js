const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
      unique: true, // must be unique
      trim: true, // trimmed, removes whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true, // must be unique
        match: [/.+@.+\..+/, 'Must use a valid email address'], // email validation using regex
    },
    thoughts: [thoughtSchema],
    friends: [friendSchema],
  },
  {
    toJSON: {
      getters: true, // run getters when converting document to json
      virtuals: true, // include virtuals when converting document to json
    },
    toObject: {
      virtuals: true, // include virtuals when converting document to object when console.logging
    },
  }
);

// virtual for length of friends array
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
