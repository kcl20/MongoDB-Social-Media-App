const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');



module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        console.log('getAllThoughts') 
        Thought.find()
          .then((videos) => res.json(videos))
          .catch((err) => res.status(500).json(err));
      },

    // add thought
    addThought(req, res) {
        console.log('addThought')
        Thought.create(req.body)
        .then(function (thought) {
            return User.findOneAndUpdate(
            { username: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
            );
        })
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },

    getThought(req, res) {
        console.log('getThought')
        Thought.findOne({ _id: req.params.thoughtId })
        .then(function (thought) {
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
        }




  // updateThought(req, res) {
  //     Thought.findOneAndUpdate()
  // },

  // remoteThought(req, res) {
  //     Thought.findOneAndDelete()
  // },
  

};
