//import express
const express = require('express')

//Change user's password into bcrypt form
const bcrypt = require('bcrypt');
const saltRounds =10;

//start listening on port 3000
const app = express()
const port = 3000

let origin =[]
app.use(express.json())

app.post('/login', async(req, res) => {

    const{username, password}=req.body
    let data = req.body
  
    let matched = dbusers.find(element=> element.username == username) //Check the details of username in the database
    if(matched)
        if(matched.password == password){
        return matched
  
    } else{
        return "Password not matched"
  
    }
    else{
            return "username not found"
  
    }
    
    res.send("result");
    
  });