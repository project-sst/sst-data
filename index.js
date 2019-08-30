var async = require("async");
var mysqldesc = require('mysqldesc');
var mysql2swagger = require('mysql2swagger');
var db;
// Mysql connect config.
var config = {
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'sst'
};

mysqldesc(config, function (err, data) {
  db = data;
	// Get spec for connected database
	for (var prop in db) {
		mysql2swagger(config, "sst", prop, function (err, schema) {
			var tabla = JSON.stringify(schema, null, 4);
			tabla = tabla.substr(1,tabla.length-2)+",";
			console.log(tabla);
		});
	}

});
