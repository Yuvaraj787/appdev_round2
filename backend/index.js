const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pg = require("pg");
app.use(bodyParser.urlencoded({extended:true}));
const bcrypt = require('bcrypt');
const saltRounds = 10;
const conn = new pg.Client(  
    {host: "localhost",
   user: "postgres",
   port: 5432,
  password: "97643164",
  database: "postgres"});

app.post("/register",(req,res)=>{
    console.log(req.body);
    console.log(req.query);
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.query.pass, salt, function(err, hash) {
        conn.query("insert into userdata1 values ($1,$2)",[req.query.email,hash],(err)=>{
            if (err) {
                console.log("error in inserting :"+err);
            } else {
                console.log("Inserted successflu");
                res.json({success:true})
            }
        })
    });
});
    
})
conn.connect((err)=>{
    if (err) {
      console.log("error:"+err);
    } else { console.log("connected"); }
  });

app.get("/checking",(req,res)=>{
    res.json({name:"Fetched"});
})
app.listen(3000,()=>{
    console.log("erver is running on port 3000");
})