var sitePort = 3000;

var express = require( 'express' );
var fs = require( 'fs' );

var app = express();
var staticRoot = __dirname + '/public/';
app.set( 'port', ( process.env.PORT || sitePort ) );
app.use( express.static( staticRoot ) );

app.use( '/js/phaser/', express.static( __dirname + '/../node_modules/phaser-ce/build/' ) );

app.get( "/", function(req, res) {
    fs.createReadStream( staticRoot + 'index.html' ).pipe( res );
} );

app.listen( app.get( 'port' ), function() {
	console.log( 'app running on port ', app.get( 'port' ) );
} );