var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var _ = require("lodash");

var app = express();
var api_PORT = 3000;

var listenOnPort = function(){
		/// listen on port
			console.log("Listening on port :"+api_PORT);
			app.listen(api_PORT);
};

//// Middle-Ware  Needed for REST API
	app.use( bodyParser.urlencoded({extended: true}) );
	app.use( bodyParser.json() );
	app.use( methodOverride("X-HTTP-Method-Override") );


//// CORS - Cross Origin Resourse Sharing - Support
	app.use(function(req, res, next){
		res.header("Access-Controll-Allow-Origin","*");
		res.header("Access-Controll-Allow-Origin", "GET,PUT,POST,DELETE");
		res.header("Access-Controll-Allow-Origin", "Content-Type");
		next();
	});

/// Connect to Database..
	var connectionString = "mongodb://localhost/meanApp";
	mongoose.connect(connectionString);
	mongoose.connection.once("open", function(){
		
		/// Load the models
			app.models = require("./models/allModels");

		/// Register Each Controller for each Route
			var routes = require("./routes");
			_.each(routes, function(controller, route){
				app.use(route, controller(app, route));
			});

		//// Listen on Set Port
			listenOnPort();	
	});

module.exports = app;
