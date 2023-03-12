# MongoDB Social Media App
 

## Description

A social media app back-end powered by Express, Mongoose and MongoDB.

Allows users to be created, updated and deleted. Users can also add other users as friends.

Users can post, update and delete thoughts associated with their user account.

Other users can post and delete reactions to thoughts.


## Table of Contents

- [Installation](#installation)
- [Screenshots](#screenshots)
- [Deployed Application](#deployed-application)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A

## Screenshots/Walkthrough

* See Zoom recording here: https://us02web.zoom.us/rec/share/55IHcY68khBayOp2NBOY5farcocBTzYUJKtr55plagVpJuQQfpPXtoDvoVoYjgI6.6AgE_c7i2HzHSvij?startTime=1678584215000
Passcode: hg*CG.w2



## Deployed Application

n/a

## Usage

- Start the application.
- Use Insomnia and the following routes:

// /api/thoughts/:userId/ route to post a new thought or get all thoughts
router.route('/').get(getAllThoughts).post(addThought);

// /api/thoughts/:thoughtId route to update a thought, get a single thought, or delete a thought
router.route('/:thoughtId').put(updateThought).delete(removeThought).get(getThought);

// /api/thoughts/:userId route to get all thoughts for a user
router.route('/user/:userId').get(getAllThoughtsByUser);

// add a reaction to a thought ID
router.route('/:thoughtId/reactions').post(addReaction)

// remove a reaction for a thought ID
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// /api/users route to get all users and post a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id route to get a single user, update a user, and delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add a friend to a user
router.route('/:userId/friends/:friendId').post(addFriend)

// remove a friend from user
router.route('/:userId/friends/:friendId').delete(removeFriend)

## Credits

Myself.

## License

Please refer to the LICENSE in the repo.
