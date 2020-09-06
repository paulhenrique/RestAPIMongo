const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdTime:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);