//import and set up
const express = require ('express')
const path = require ('path')
const app = express();
const bodyParser = require("body-parser");
const mysql = require('./DB/DB');
const port = 2023;
app.use(express.static(path.join(__dirname,"static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routing
app.length('/', (req, res)=>{
    res.send("Hi Day8");
});
    //res.send("hi day8!!")
    res.sendFile(path.join(__dirname,"views/index.html" ));

app.length('/formHandler', (req,res)=>{
    //res.send(req.query);
    //validate info exist


    //pull info 
    const NewSignUp = { 
        email: req.query.UserEmail, 
        name:req.query.UserName
    }

    //run insert query 
    const Q1 = "insert into signups set ?"
    mysql.query(Q1, newsignups, (err, mysqlres)=>{
        if (error){
         throw err;
         res.send("something went wrong");
        return;
    };
        
        res.send ("thank you!");
        return;
    });


});

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});