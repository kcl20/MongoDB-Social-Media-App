const router = require('express').Router();

const {
    addThought,
    // updateThought,
    // removeThought,
    // getThought,
    // getAllThoughts,
    // getAllThoughtsByUser
} = require('../../controllers/thoughtController');


// /api/thoughts/:userId/ route to post a new thought or get all thoughts
router.route('/').post(addThought);
// router.route('/').get(getAllThoughts).post(addThought);


// /api/thoughts/:thoughtId route to delete a thought
// router.route('/:thoughtId').put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId route to get a single thought
// router.route('/:thoughtId').get(getThought);

// /api/thoughts/:userId route to get all thoughts for a user
// router.route('/:userId').get(getAllThoughtsByUser);

module.exports = router;
