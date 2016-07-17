'use strict';

var pg = require('pg');
var path = require('path');
var config = require('../../config')

exports.create = function(req, res) {

	var results = [];

	var data = {name: req.body.name};

	pg.connect(config.database.uri, function(err, client, done) {
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err });
		}

		client.query("INSERT INTO organizations(name) values($1)", [data.name]);

		var query = client.query("SELECT * FROM organizations ORDER BY id ASC");

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}


exports.read = function(req, res) {

	var results = [];

	pg.connect(config.database.uri, function(err, client, done) {
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ sucesss: false, data: err});
		}

		var query = client.query("SELECT * FROM organizations ORDER BY id ASC;");

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}


exports.update = function(req, res) {

	var results = [];

	var id = req.params.id;

	var data = {name: req.body.name};

	pg.connect(config.database.uri, function(err, client, done) {
		if(err) {
			done();
			console.log(err);
			return res.status(500).send(json({ success: false, data: err}));
		}

		client.query("UPDATE organizations SET name=($1) WHERE id=($2)", [data.name, id]);

		var query = client.query("SELECT * FROM organizations ORDER BY id ASC");

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}


exports.delete = function(req, res) {

	var results = [];

	var id = req.params.id;

	pg.connect(config.database.uri, function(err, client, done) {

		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err });
		}

		client.query("DELETE FROM organizations where id=($1)", [id]);

		var query = client.query("SELECT * FROM organizations ORDER BY id ASC");

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}