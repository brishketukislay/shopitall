const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add an item'],
    },
    email:{
        type:String,
        required:[true, 'Please add an email'],
    },
    phone:{
        type:String,
        required:[true, 'Please add a phone number'],
    },
},
{
    timeStamp:true,
})

module.exports = mongoose.model('item',itemSchema);