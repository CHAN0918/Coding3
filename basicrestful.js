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
app.post('/login', async(req, res) => {
  let data = req.body

  /*const {username, password} = req.body
    const search = dbusers.find(user => user.username == username)

    if(!search)
    {
      res.send("Username not found")
    }

    const valid = await bcrypt.compare(password, user.password)
    
    if(!valid){
      res.send("Wrong password")
    }
    console.log(search)
    res.send("login successful")

  
  res.send(login(
  data.username,
  data.password
  ));*/
  res.send(login(
  data.username,
  data.password));

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

    /*if(match){
      res.send("Username already taken.")
     }*/

    dbusers.find(element => {console.log(element)}) //find element in array
  
      dbusers.push({
          username: newusername,
          password: newpassword,
          name: newname,
          email: newemail,
          phone: newphone,
      })  
  }

//Change user's password into bcrypt form
const bcrypt = require('bcrypt');
const saltRounds =10;

app.post('/hash', async (req,res) => {
  const {username, password, name, email, phone} = req.body
  const hash = await bcrypt.hash(password, saltRounds)

  dbusers.push(
  {
    username,
    password: hash,
    name,
    email,
    phone
  })

    console.log(dbusers)

    res.send('success')

})

  //start the server
  app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`)    
  })

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

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ZenYang:<password>@cluster0.st3ynq8.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const user = await client.db("BENR2423-S1").
    collection("users").find({"username":"soo"}).
    toArray()
    insertOne({
      "username": "Soo2:",
      "password": "wen1234"
    })
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);