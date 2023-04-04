const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    text:{
        type:String,
        required:[true, "Please add a text value"]
    },
    // Name:{
    //     type:String,
    //     required:[true, "Please add a Name"]
    // },
    // Email:{
    //     type:String,
    //     required:[true, "Please add a Email"]
    // },
    // Password:{
    //     type:String,
    //     required:[true, "Please add a Password"]
    // },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User',userSchema);
