const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
  
// Calling form.js from models
const Form = require("./models/form");
  
// Connecting to database
mongoose.connect("mongodb://localhost/form",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  
//middlewares
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

//rendering form.ejs
app.get("/", function(req, res){
    res.render("form");
});

//creating form for input and sort data and show
app.post("/", function(req, res){
    const username = req.body.username;
    const words = username.split(" ");
    words.sort();
    console.log(words);
    const wordsToString = words.join(" ");
    console.log(wordsToString);
    const f = {wordsToString: wordsToString};
    Form.create(f, function(err, newlyCreatedForm){
        if(err)
        {
            console.log(err);
        }else{
            res.send(wordsToString);
        }
    });
});


// Starting the server at port 8080
app.listen(8080, function() { 
    console.log('Server running on port 8080'); 
});