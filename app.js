

// import express
const express = require("express")

// create the express application and port
const app = express()
const port = 3000

// set the root route
app.get("/",(req,res)=>{
    // send back message hello world
   return res.send("Hello Node")
})

// create a jobs endpoint 
app.get("/jobs", (req, res)=>{
    return res.send("This is a jobs endpoint")
})
// configure listening port
app.listen(port, ()=> console.log(`Example app is listening on port ${port}`))