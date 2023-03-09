const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    // addThought,
    // removeThought,
} = require('../../controllers/userController');

// /api/users route to get all users and post a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id route to get a single user, update a user, and delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/thoughts route to post a new thought for a user
// router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId route to delete a thought for a user
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;