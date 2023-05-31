//import and init
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.get(express.static(path.join (__dirname, 'static')))

//routing 
app.get('/' , (req, res)=> {
    console.log('this is the body', req.body);
    res.sendFile(path.join(__dirname, "views/page4.html"))
    
});

app.get('/page4',(req, res)=>{
    res.sendFile(path.join(__dirname, "views/page4.html"))
});

app.get('/formhandler', (req, res)=>{
    res.send("thank you!")

})

//set up listen 
app.listen(port, ()=>{
    console.log("server is running on port", port)
})