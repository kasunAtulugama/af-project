var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({

   name: String,
    id:Number,
    nic:String,
    bod: Date
});

const Student =  mongoose.model('Student', testSchema);
