//packages 
const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.get("/",(request,response)=>{
    console.log("BODY"+request.body);
    console.log("headers :",request.headers);
    console.log("params : ",request.params)

    response.send("hello world")
})
app.listen(5000,()=>{
    console.log("server started at : "+5000);
})