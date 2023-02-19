require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 4000
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!!!');
})

app.listen(port, () => {
    console.log(process.env.PORT)
    console.log("server listening on port " + port)
    })