const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

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
    },
    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {$set: req.body},
            { new: true, runValidators: true }
        )
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },
    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }
            )
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    }, 
    // add a friend to a user
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true }
            )
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },
    // remove a friend from a user
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
            )
        .then(function (user) {
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    }
}