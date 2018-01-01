// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log ('Connected to MongoDB server.');

  // deleteMany
  // db.collection('ToDos').deleteMany({text:'Eat lunck'}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany
  // db.collection('ToDos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteFind
  // db.collection('ToDos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany
   db.collection('Users').deleteOne({name:'Daniel'}).then((result) => {
     console.log(result);
  });



  // db.close();
});
