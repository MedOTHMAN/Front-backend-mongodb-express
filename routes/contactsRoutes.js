const express = require('express');
const route = express.Router();
const Contact = require('../models/contactSchema');


route.post('/', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save((err, data) => {
        if (err) console.log(err);
        else res.send("contact enregistré");
    });
});

route.get("/" , (req,res) => {
    Contact.find({} , (err,data)=> {
        res.json(data)
    });
});

route.get("/:idcontact" , (req,res) => {
    const idcontact = req.params.idcontact;
    Contact.findById({ idcontact } , (err,data)=> {
        res.json(data)
    });
});

route.delete("/:idcontact", (req,res) =>{
    const idcontact = req.params.idcontact;
    Contact.findByIdAndDelete(idcontact , (err,data)=> {
        res.send(data)
    });
});

route.put("/:idcontact" , (req , res) => {
    const idcontact = req.params.idcontact;
    const NewData = req.body;
    Contact.findByIdAndUpdate(idcontact , NewData , (err , data) => {
        res.send("contact updated");
    })
})

module.exports = route;