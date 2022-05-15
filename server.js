const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('codigoSecreto'));

app.use(session({
	secret: 'codigoSecreto',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs');

app.get("/",(req,res) =>{

})

app.get("/login", (req,res) =>{
	res.render("login");
})

app.post("/login",(req,res) =>{
	

})

app.listen(8080, () => console.log("Server started"));
