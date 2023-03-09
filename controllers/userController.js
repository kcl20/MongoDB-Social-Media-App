const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },
    // get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
}
}