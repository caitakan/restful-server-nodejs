//// Logs Man Page to the Console
	var app_ManPage = function(){
		console.log("##################");
		console.log("Solid Light API");
		console.log("------------------");
		
	};

	var showAppTitle = function(){
		console.log("Solid Light - Application Task Runner");
	};


/////////////////////////////////////////
/////  Gruntfile.js   Configuration.. 
module.exports = function(grunt){
	grunt.initConfig({
	  run: {
	    test: {
	      cmd: "./scripts/integrationTest",
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-run');

	///////////////////////////////////////
	/// Register Custom Tasks
		/////////////////////////////////////////////////
		///   Show Man Page 
			grunt.registerTask('man', app_ManPage);

		////  Run Test  
			grunt.registerTask('appTitle', showAppTitle);
		

	////  DEFAULT  
	// fallback Default task  for when just running grunt with no param
		grunt.registerTask('default', ["appTitle"]);
};