// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log ('Connected to MongoDB server.');

  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: 'false'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to do.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Daniel',
  //   age: 57,
  //   location: 'Lancaster'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user.', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
});
