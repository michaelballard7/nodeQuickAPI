// import express
const express = require("express")
// create the express application and port
const app = express()
// establish a port to work withs
const port = 3000

// import body parser middleware
const bodyParser = require("body-parser")

// I can use middleware such as body parser with
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // used to access parameters


// I can write custom middleware to parse urls
app.use((req, res, next)=>{
    // log the message, Custom middleware run
    console.log("Middleware is running")
    // I can also add custom properties to the req object
    req.userId = 1;
    req.user = "Michael Ballard";
    next();
});

// set the root route
app.get("/",(req,res)=>{

    // log a custom middleware function:
    console.log(req.user);
    console.log(req.userId)
    // send back message hello world
   return res.send("Hello Node")
});

jobsData = [
    {
        id:1,
        title: "software engineer",
        description: 'The best web developer on the planet'
    },
    {
        id: 2,
        title: "Quantitative Portfolio Manager",
        description: 'Responsible for models and algorthms that manage capital'
    },
    {
        id: 3,
        title: "Founder",
        description: 'The guy that makes ideas move'
    }
];

// create a jobs endpoint 
app.get("/jobs", (req, res)=>{
   return res.json(jobsData)
});

//: Create a post route 
app.post("/jobs",(req, res)=>{
    // get the id from the body request
    let id = req.body.id;
    // get the title  from the request body
    let title = req.body.title;
    // get the description from the request body
    let description = req.body.description;
    // create a new job object
    let newJob = {
        id: id,
        title: title,
        description: description
    }
    // add new job object
    jobsData.push(newJob)
    // return the jobs array to the server
    return res.json(jobsData)
});

// configure listening port
app.listen(port, ()=> console.log(`Example app is listening on port ${port}`));