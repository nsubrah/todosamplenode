var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const port = process.env.PORT || 3000;
var app =express();
app.use(bodyParser.json());

app.listen(port,() => {
  console.log(`Started on port ${port}}`);
});

app.post('/todos',(req,res) => {
var todo = new Todo({
  text: req.body.text
    });
todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
  res.status(400).send(e);
});
});

app.get('/todos',(req,res) => {

  Todo.find({}).then((todo) => {
if(todo)
  res.status(200).send(todo);
  else {
    res.status(404).send();
  }

}, (e) => {
res.status(400).send();
});

});

app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  res.status(404).send('Id is Invalid');

  Todo.findById(id).then((todo) => {
if(todo)
  res.status(200).send(todo);
  else {
    res.status(404).send();
  }

}, (e) => {
res.status(400).send();
});

});

app.delete('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  res.status(404).send('Id is Invalid');

  Todo.findByIdAndRemove(id).then((todo) => {
if(todo)
  res.status(200).send(todo);
  else {
    res.status(404).send();
  }

}, (e) => {
res.status(400).send();
});

});
