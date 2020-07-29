const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const sql = require("./db.js");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/employee", (req, res) => {
 const query = 'SELECT * FROM Employee';
 allEmployee(query,res);  
});


app.post("/employee", (req, res) => {
  console.log(Object.values(req.body));
  const query = 'INSERT INTO Employee(name,location,salary) VALUES(?,?,?)';
  const value = Object.values(req.body);
  databasequery(query,value,res);
});


app.post('/deletemployee', (req,res)=>{
  const query= `DELETE FROM Employee WHERE id =${req.body.id}`;
   allEmployee(query, res);
});


app.put('/editEmployee', (req,res)=>{
  const {id,name,location,salary} = req.body;
  const query = `UPDATE Employee SET name = ?,location=?  ,salary=?  WHERE id=?`;
  databasequery(query, [name,location,salary,id], res);
})

function databasequery(query, data,res){
  sql.query(query , data , (err, result) => {
    if (err) {
      console.log("error: ", err);
  
      return;
    };
    res.json({ result});
    
 });
}

function allEmployee(query , res){
  sql.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    };
    res.json({ result});
  });
}
app.listen(3100, () => {
  console.log("Server is running on port 3000.");
});