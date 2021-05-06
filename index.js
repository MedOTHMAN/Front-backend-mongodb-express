const express = require("express");
const mongoose = require("mongoose");

mongoose.connect( // connect permet de connecter la base de donnéee avec le serveur
  "mongodb+srv://Victor:iqoEy9Y5Tn5O1eh0@contacts.tspdt.mongodb.net/contactsdb?retryWrites=true&w=majority",{
    useNewUrlParser: true,      // ces 4 lignes sont prise de "https://www.npmjs.com/package/mongoose"
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (err) => {
    if (err) console.log(err);
    else console.log("db connected");
  }
);

const app = express();
app.use(express.json());

app.use('/api/contacts' , require('./routes/contactsRoutes'));

app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("server running on port 5000");
});
