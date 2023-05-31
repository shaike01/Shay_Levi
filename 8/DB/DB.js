//import
const SQL = require ('mysql2');
const dbconfig = require('./DB.config');


//create connectiom
const connection = SQL.createConnection ({
    host: dbConfig.Host,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});


//open the connection
connection.connect(error => { 
    if (error) 
    throw error;
    
    console.log("connected to DB"); 
}); 

module.exports = connection;



mosule.rxports = {
    HOST: "localost",
    USER: "root",
    PASSWORD: "shaylevi2001",
    DB:"mysql"
};