const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    adresse :
        {
            city : String,
            postCode : Number,
        },
});

module.exports = mongoose.model("contact" , ContactSchema)