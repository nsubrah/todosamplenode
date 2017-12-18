//const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require('mongodb').ObjectId;
const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId().getTimestamp();
console.log(obj);

// MongoClient.connect('mongodb://localhost:27017', (err,client) => {
//   if(err)
//   return console.log('Issue conecting to server');
//   console.log('Successfully connected to the server');
//   db = client.db('TodoApp');
//   db.collection('Users').insertOne({
//     name : 'abc',
//     age : 29,
//     location : 'Dublin'
//   },(error,result) => {
//         if(error)
//          return console.log('Error inserting data',error);
//         else {
//           console.log(result.ops[0]._id.getTimestamp());
//         }
// });
//
// client.close();

// });
