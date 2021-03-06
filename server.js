var express = require('express'),
    http = require('http'),    
    app = express();    

var dbOperations = require("./dbOperations.js");

var pg = require('pg');
var connection = "postgres://postgres:2132@localhost:5432/RestaurantProject";

app.set('views', __dirname + '/views') ;

// when someone accesses the / page, serve them with index.html which then handles everything else (single page application)
app.get('/' , function(req,res) {
    res.sendfile('public/html/index.html');    
});

app.get('/login/:user/:pass', function(req,res){       
    dbOperations.login(req,res);    
});

// these are accessed by angularjs to create, read, update and delete (CRUD) data
app.get('/restaurant', function(req,res){	
    dbOperations.getRestaurants(req,res);    
});

app.get('/rating/:restaurantid', function(req,res){ 
    dbOperations.getRatings(req,res);    
});

app.get('/raters', function(req,res){ 
    dbOperations.getRaters(req,res);    
});

app.get('/A/:id', function(req,res){ 
    dbOperations.selectRestaurant(req,res);    
});

app.get('/B/:id', function(req,res){ 
    dbOperations.selectMenuItem(req,res);    
});

app.get('/C/:type', function(req,res){ 
    dbOperations.categoryRestaurant(req,res);    
});

app.get('/D/:id', function(req,res){ 
    dbOperations.expensiveMenuItem(req,res);    
});

app.get('/E/', function(req,res){  
    dbOperations.averagePrices(req,res);    
});

app.get('/F', function(req,res){    
    dbOperations.f(req,res);    
});

app.get('/G', function(req,res){    
    dbOperations.g(req,res);    
});

app.get('/H/:id', function(req,res){ 
    dbOperations.h(req,res);    
});

app.get('/I/:type', function(req,res){  
    dbOperations.i(req,res);    
});

app.get('/J/:morePopularX/:morePopularY', function(req,res){    
    dbOperations.j(req,res);    
});

app.get('/K', function(req,res){  
    dbOperations.queryK(req,res);    
});

app.get('/L', function(req,res){  
    dbOperations.queryL(req,res);    
});

app.get('/M/:id', function(req,res){  
    dbOperations.queryM(req,res);    
});

app.get('/N/:name', function(req,res){  
    dbOperations.queryN(req,res);    
});

app.get('/O', function(req,res){  
    dbOperations.queryO(req,res);    
});

app.get('/deleteRestaurant/:RestaurantID', function(req,res){       
    dbOperations.deleteRestaurant(req,res);    
});

app.get('/deleteRater/:UserID', function(req,res){       
    dbOperations.deleteRater(req,res);    
});

app.get('/deleteMenuItem/:ItemID', function(req,res){       
    dbOperations.deleteMenuItem(req,res);    
});

app.get('/getRaters', function(req,res){       
    dbOperations.getRaters(req,res);    
});

app.get('/getMenuItems/:RestaurantID', function(req,res){       
    dbOperations.getMenuItems(req,res);    
});

app.get('/insertRater/:email/:password/:name/:type', function(req,res){       
    dbOperations.insertRater(req,res);    
});

app.get('/insertRestaurant/:nameOfRestaurant/:typeOfRestaurant/:url', function(req,res){   
    dbOperations.insertRestaurant(req,res);    
});

app.get('/insertMenuItem/:restaurantID/:nameOfItem/:itemType/:category/:descriptionn/:price', function(req,res){   
    dbOperations.insertMenuItem(req,res);    
});

app.get('/insertRating/:UserID/:restaurantID/:comments/:price/:food/:mood/:staff', function(req,res){   
    dbOperations.insertRating(req,res);    
});

app.get('/insertRatingItem/:UserID/:ItemID/:rating/:rating_comment', function(req,res){   
    dbOperations.insertRatingItem(req,res);    
});

app.get('/getRatingItems/:ItemID', function(req,res){   
    dbOperations.getRatingItems(req,res);    
});

app.get('/getLocations/:RestaurantID', function(req,res){   
    dbOperations.getLocations(req,res);    
});


app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/public'));  
app.listen(app.get('port'), function () {   
    console.log('Express server listening on port ' + app.get('port'));    
});