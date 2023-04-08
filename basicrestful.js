//Javascript (feat Express.js)

//import express
const express = require('express')

//start listening on port 3000
const app = express()
const port = 3000

let origin =[{username: "user1", password: "user1@123"}]

//enable json body parsing
app.use(express.json());

//login with express
app.post('/', (req, res) => {
  let data = req.body
  res.send(login(
  data.username,
  data.password
  ));
  
});

//register with express
app.post('/register', (req, res) => {
  let data = req.body
  res.send(register(
    data.username,
    data.password,
    data.name,
    data.email,
    data.phone
  ));
  
});

//create a GET route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Post request')
})

//create another GET route
app.get('/bye', (req, res) => {
    res.send('Bye bye World!')
  })

  //start the server
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)    
})

let dbusers =[
  {
      username: "chan",
      password: "zenyang_....",
      name: "Chan Zen Yang",
      email: "chan@utem.edu.my",
      phone: "011-16779696",
  },
  {
      username: "Thor",
      password: "Th....",
      name: "Thor",
      email: "thor@utem.edu.my",
      phone:"011-85496211"
  },
  {
      username: "Trevor",
      password: "....",
      name: "Trevor Phillips",
      email: "TP@utem.edu.my",
      phone: "011-45269824"
  }
  ]
  
  //confirmation for login 
  function login(username, password){
      console.log("Someone try to login with", username, "with", password)
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
  }
  
  function register(newusername, newpassword, newname, newemail, newphone){

    dbusers.find(element => {console.log(element)}) //find element in array
  
      dbusers.push({
          username: newusername,
          password: newpassword,
          name: newname,
          email: newemail,
          phone: newphone,
      })  
  }

/*app.post('/login',(req, res) => {
  //get the username and password from the request body
  const {username, password} = req.body

  //find the user in the database
  const user = dbusers.find(user => user.username === username && user.password === password)

  if(user)
  {
    res.send(user);
  }
  else{
    res.send({error: "User not found"});
  }
})*/