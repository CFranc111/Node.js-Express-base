var express = require("express");
var app = express(); 

// Set templating engine
app.set("view engine", "ejs");
//app.set("views", __dirname + "/otherdir"); // Set ejs to look in dir other than default "views"

// Vars/data available to all views
app.locals.pageTitle = "The Site";

// Routes/vars/data pass
app.get("/", function(req, res) {
    res.render("default", { 
        title: "Home",
        classname: "home",
        users: ['Jo', 'Bob', 'Piggy']
    }); // Render the template default.ejs. Looks in views top level folder, or folder specified by set.
    // Second arg is passed to view.
});

app.get("/about", function(req, res) {
    res.render("default", { 
        title: "About Us",
        classname: "about"
    });
});

app.get("/who/:name?", function(req, res) {
    var name = req.params.name; // Name that's passed in thru URL gets assigned to this var.
    res.send(`${name} was here.`);
});

app.get("/who/:name?/:title?", function(req, res) {
    var name = req.params.name; 
    var title = req.params.title;
    res.send(`${name}, ${title} was here.`);
});

app.get("*", function(req, res) { // default error (place at end; works like else)
    res.send("bad route");
});

// Make server
var server = app.listen(3000, function() {
   console.log("Listening on p 3000"); 
});