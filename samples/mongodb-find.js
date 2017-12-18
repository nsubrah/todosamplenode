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
  db.collection('Todos').find({
    _id: new ObjectId('5a360238ad342a1f74677a21')
    }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    if(err)
    console.log('Unable to fetch Todos',err);
  });

});
