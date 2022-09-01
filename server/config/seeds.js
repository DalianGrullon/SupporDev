const db = require('./connection');
const { Developer, Requester, Request } = require('../models/index');

db.once('open', async () => {
  await Request.deleteMany();
  const requests = await Request.insertMany([
    {
      title: 'HTML',
      description: 'I need a basic HTML layout'
    },
    {
      title: 'CSS',
      description: 'I need a basic CSS template'
    },
    {
      title: 'JS',
      description: 'I need some scripting done!'
    },
  ]);

  console.log('Requests seeded');
  
  await Requester.deleteMany();
  const requesters = await Requester.insertMany([
    {
      userName: 'username1',
      firstName: 'user',
      lastName: 'name',
      email: 'user1@testmail.com',
      password: 'password12345',
      requests: [requests[0]._id]
    },
    {
      userName: 'username2',
      firstName: 'user',
      lastName: 'name',
      email: 'user2@testmail.com',
      password: 'password12345',
      requests: [requests[1]._id]
    },
    {
      userName: 'username3',
      firstName: 'user',
      lastName: 'name',
      email: 'user3@testmail.com',
      password: 'password12345',
      requests: [requests[2]._id]
    },
  ]);

  console.log('Requesters seeded');

  await Developer.deleteMany();
  await Developer.insertMany([
    {
      userName: 'username4',
      firstName: 'user',
      lastName: 'name',
      email: 'user4@testmail.com',
      password: 'password12345',
      contributions: [ requests[0]._id, requests[1]._id ]
    },
    {
      userName: 'username5',
      firstName: 'user',
      lastName: 'name',
      email: 'user5@testmail.com',
      password: 'password12345',
      contributions: [ requesters[2]._id ]
    },
  ]);

  console.log('Developers seeded');

  process.exit();
});