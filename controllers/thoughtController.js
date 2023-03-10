const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');



module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        console.log('getAllThoughts') 
        Thought.find()
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },

    // add thought
    addThought(req, res) {
        console.log('addThought')
        Thought.create(req.body)
        .then(function (thought) {
            return User.findOneAndUpdate(
            { id : req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
            );
        })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // get single thought by ID in url params
    getThought(req, res) {
        console.log('getThought')
        Thought.findOne({ _id: req.params.thoughtId })
        .then(function (thought) {
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
    },
  updateThought(req, res) {
      console.log('updateThought')   
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .then(function (thought) {
        res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },

  removeThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { id: thought.username },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then(function () {
        res.json({ message: 'Thought successfully deleted!' });
      })
      .catch((err) => res.status(500).json(err));
  },
  
  getAllThoughtsByUser(req, res) {
    console.log('getAllThoughtsByUser')
    User.findOne({ id: req.params.userId })
      .then((user) => res.json(user.thoughts))
      .catch((err) => res.status(500).json(err));
  }

};
