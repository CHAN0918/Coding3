const bcrypt = require("bcryptjs")

const password = "lab011223"
const saltRounds = 5

bcrypt.genSalt(saltRounds, function (saltError, salt)
{
    if (saltError){
        throw  saltError
    }else{
        bcrypt.hash(password, salt, function(hashError, hash){
            if (hashError){
                throw hashError
            }else{
                console.log(hash)
            }
        })
    }
})


//connect the mongodb database with vs code
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/userinfo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.listen(3000, () => {
  console.log("Server is running at port 3000");
});



// CREATE operation
  /*db.users.insertOne(users, {name: 'John Cena', password: "John321"})*/

  /*db.userinfo.insertOne(newUser, function(err, res) {
    if (err) throw err;
    console.log(`Inserted new user with id ${res.insertedId}`);
  });
  
  client.close();*/








  


