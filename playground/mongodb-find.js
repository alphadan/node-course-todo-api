// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log ('Connected to MongoDB server.');

  // db.collection('ToDos').find({
  //   _id: new ObjectID('5a4a8837e90fcc037330210b')
  //
  // }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  //
  // });

  // db.collection('ToDos').find({}).count().then((count) => {
  //   console.log('ToDos');
  //   console.log(`ToDos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  //
  // });

  db.collection('Users').find({name: 'Daniel'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log('Unable to fetch todos.', err);
  });



  // db.close();
});
