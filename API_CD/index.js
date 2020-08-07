const _expressPackage = require("express");  
const _bodyParserPackage = require("body-parser");  
const _sqlPackage = require("mssql");  
//Initilize app with express web framework  
const app = _expressPackage();  
//To parse result in json format  
app.use(_bodyParserPackage.json());  
// Connection string parameters.


app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
});  
  
//Lets set up our local server now.  
const server = app.listen(process.env.PORT || 3001, function () {  
    const port = server.address().port;  
    console.log("App now running on port", port);  
});  
  
//Set up your sql connection string, i am using here my own, you have to replace it with your own.  
const dbConfig = {
    user: 'imw',
    password: 'abcd1234@@huyfan91',
    server: '27.79.1.50',
    database: 'imw_QuanLyDaoTaoTinChi'
}
  
//Function to connect to database and execute query  
const QueryToExecuteInDatabase = function (response, strQuery) {  
    //close sql connection before creating an connection otherwise you will get an error if connection already exists.  
    _sqlPackage.close();  
    //Now connect your sql connection  
    _sqlPackage.connect(dbConfig, function (error) {  
        if (error) {  
            console.log("Error while connecting to database :- " + error);  
            response.send(error);  
        }  
        else {  
            //let's create a request for sql object  
            const request = new _sqlPackage.Request();  
            //Query to run in our database  
            request.query(strQuery, function (error, responseResult) {  
                if (error) {  
                    console.log("Error while connecting to database:- " + error);  
                    response.send(error);  
                }  
                else {  
                    response.send(responseResult);  
                }  
            });  
        }  
    });             
 }  
  
//GET API  
app.get("/admin", function(_req ,_res){  
    const Sqlquery = "select * from Admin";  
    QueryToExecuteInDatabase(_res, Sqlquery);  
});
app.post("/login", function(_req ,_res){  
    const _id  = _req.params.id;
    const Sqlquery = `select * from Admin where ${_id}`
    QueryToExecuteInDatabase(_res, Sqlquery);  
});



