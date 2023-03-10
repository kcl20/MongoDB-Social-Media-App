const router = require('express').Router();

const {
    addThought,
    getThought,
    getAllThoughts,
    updateThought,
    removeThought,
    // getAllThoughtsByUser
} = require('../../controllers/thoughtController');


// /api/thoughts/:userId/ route to post a new thought or get all thoughts
router.route('/').get(getAllThoughts).post(addThought);


// /api/thoughts/:thoughtId route to update a thought, get a single thought, or delete a thought
router.route('/:thoughtId').put(updateThought).delete(removeThought).get(getThought);



// /api/thoughts/:userId route to get all thoughts for a user
// router.route('/:userId').get(getAllThoughtsByUser);

module.exports = router;
