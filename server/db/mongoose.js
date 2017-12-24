var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://ds151062.mlab.com:51062/mlab');
