var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://todo:todo@ds151062.mlab.com:51062/mlab');
