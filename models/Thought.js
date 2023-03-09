const { Schema, model } = require('mongoose');


// define reactionSchema subdocument
// const reactionSchema = new Schema(
//     {
//         reactionID: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//           },
//           reactionBody: {
//               type: String,
//               required: true,
//               max_length: 280,
//           },
//           username: {
//             type: Schema.Types.ObjectId,
//             ref: 'User',
//             required: true,
//           },
//           createdAt: {
//               type: Date,
//               default: Date.now,
//               get: (createdAtDateValue) => dateFormat(createdAtDateValue, "dddd, mmmm dS, yyyy, h:MM:ss TT"), // use npm dateFormat package to format date
//         },
//     }
// );


// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1, // min length
      max_length: 280, // max length
    },
    // timestamps: true, // adds createdAt and updatedAt,
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: (createdAtDateValue) => dateFormat(createdAtDateValue, "dddd, mmmm dS, yyyy, h:MM:ss TT"), // use npm dateFormat package to format date
    // },
    username: {
      type: String,
      required: true,
    },
    // reactions: [reactionSchema], // array of nested subdocuments created with the reactionSchema
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

// virtual for length of reactions array
// thoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
//   });




const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
