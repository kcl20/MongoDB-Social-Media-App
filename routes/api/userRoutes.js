const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users route to get all users and post a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id route to get a single user, update a user, and delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add a friend to a user
router.route('/:userId/friends/:friendId').post(addFriend)

// remove a friend from user
router.route('/:userId/friends/:friendId').delete(removeFriend)

module.exports = router;