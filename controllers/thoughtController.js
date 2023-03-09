const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');


module.exports = {
 // add thought
 addThought(req, res) {




    .then(function (user) {
        res.json(user);
    })
    .catch((err) => res.status(500).json(err));
},

updateThought(req, res) {
    Thought.findOneAndUpdate()
},

remoteThought(req, res) {
    Thought.findOneAndDelete()
},

getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then(function (thought) {
        res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
},

getAllThoughts(req, res) {
    Thought.find({ _id: req.params.userId })
    .then(function (thought) {
        res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
}
}
