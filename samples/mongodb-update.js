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

db.collection('Todos').findOneAndUpdate({
  _id:new ObjectId('5a3733758abb5ca8507018ad')}, {
    $set: {
      completed:true
    }
  }, {returnOriginal:false}).then((result) => {console.log(result)});
});
