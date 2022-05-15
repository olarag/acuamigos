const express = require('express');
const app = express();



app.set('view engine', 'ejs');


app.get("/",(req,res) =>{

})

app.get("/login", (req,res) =>{
	res.render("login");
})

app.post("/login",(req,res) =>{
	

})

app.listen(8080, () => console.log("Server started"));
