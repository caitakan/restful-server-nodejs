/// Movie Controller 


var restful = require("node-restful");


module.exports = function(app, route){

	// Setup the controller for REST
		var crudMethods = ['get','put','post','delete'];
		var rest = restful.model(
			"movie",
			app.models.movie
		).methods( crudMethods );

	// Register this endpoint with the application
		rest.register(app, route);

	/// return middle ware
		return function(req, res, next){
			next();
		};
};
