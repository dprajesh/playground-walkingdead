/*global require*/
/*
 * Bootstrap-based responsive mashup
 * @owner Erik Wetterberg (ewg)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

/*var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};*/
var config = {
   host: "sense-demo.qlik.com",
   prefix: "/",
   port: 443,
   isSecure: true
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {

	$("#closeerr").on('click',function(){
		$("#errmsg").html("").parent().hide();
	});
	qlik.setOnError( function ( error ) {
	  	console.log(error.message);
		$("#errmsg").append("<div>"+error.message+"</div>").parent().show();
	} );
	
  	/****** NAV **********/
  	/*$(window).on('hashchange', function() {
	  	$(".nav-tabs li").removeClass("active");
	  	$(".view").hide();
		var hash = window.location.hash;
	  	var view = hash.split("-")[0];
	  	if (view === "#season") {
			var seasonNumber = hash.split("-")[1];
		  	//do some stuff with seasonNumber
		  	$(".nav-tabs li.seasons").addClass("active");
		  	$("#seasons").show();
	  	}
	  	else if (view === "#episode") {
			var episodeNumber = hash.split("-")[1];
		  	//do some stuff with episodeNumber
		  	$(".nav-tabs li.episodes").addClass("active");
		  	$("#episodes").show();
	  	}
	  	else if (view === "#char") {
			var charName = hash.split("-")[1];
		  	//do some stuff with charName
		  	$(".nav-tabs li.characters").addClass("active");
		  	$("#characters").show();
	  	}
	  	else {
		  	$(".nav-tabs li.overview").addClass("active");
			$("#overview").show();
	  	}
  	});*/
  	//$(window).trigger('hashchange');
	/******** END NAV ***********/
  
  
  
	//open apps -- inserted here --
	//var app = qlik.openApp('walkingdead.qvf', config);
	var app = qlik.openApp('e4f05d92-36f9-4166-bed1-b751ac9c38b2', config);
  	
  	//Clear button
	$(".clear-selections").click(function(e) {
	  e.preventDefault();
	  app.clearAll();
	});


	//get objects -- inserted here --
	app.getObject('QV03','aBpVEpf');
	
	
	app.getObject('QV02','nqVnfj');
	
	
	
	
	app.getObject('QV06','rNESm');
	app.getObject('QV05','YUVHUmk');
	app.getObject('QV04','Jnkrsr');
	app.getObject('QV01','CKRwRBm');
	
  
} );

