const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

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

passport.use(new PassportLocal(function(username,password,done){
	if(username === "acuamigos" && password === "123456")			return done(null,{ id: 1, name: "Cody" });	
	
	done(null, false);
}));

passport.serializeUser(function(user,done){
	done(null,user.id);
});

passport.deserializeUser(function(id,done){
	done(null, { id: 1, name: "Cody"}); 
});

app.set('view engine', 'ejs');

app.get("/",(req,res) =>{

	app.send("Hola");

});

app.get("/login", (req,res) =>{
	res.render("login");
});

app.post("/login", passport.authenticate('local',{
	successRedirect: "/",
	failureRedirect: "/login"
}));

app.listen(8080, () => console.log("Server started"));
