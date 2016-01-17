'use strict'

module.exports = function(app) {
	app.route('/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});
		
	app.route('/api/whoami')
		.get(function (req,res) {
			var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
			console.log(ip);
			res.json({ipaddress: ip});
		});
};