'use strict';

var express = require('express'),
	routes = require(./app/routes/index.js);	
var app = express();

app.set('port', (process.env.PORT || 5000));

routes(app);


app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));	
});