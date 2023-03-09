const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  

await User.collection.insertOne({
    username: 'Sam',
    email: 'sam@email.com',
})




  // Log out the seed data to indicate what should appear in the database

  console.info('Seeding complete! 🌱');
  process.exit(0);
});

