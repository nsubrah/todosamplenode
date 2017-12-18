//const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require('mongodb').ObjectId;
const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId().getTimestamp();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
  if(err)
  return console.log('Issue conecting to server');
  console.log('Successfully connected to the server');
  db = client.db('TodoApp');
//deleteOne
//db.collection('Todos').deleteOne({text:'Read the book'}).then((results) => {console.log(results)});
//deleteMany
//db.collection('Todos').deleteMany({text:'Read the book'}).then((results) => {console.log(results)});

db.collection('Todos').findOneAndDelete({text:'Read the Book1'}).then((result) => {console.log(result)});
});
