'use strict';

var https = require('https');
var pg = require('pg');
var pgp = require('pg-promise')(/*options*/);
var path = require('path');
var config = require('../../config');
var json = require('json');

var updateOrInsert = function(ind, date, val) {

	var db = pgp(config.database.uri);
	db.task(t=> {
	    return t.one("SELECT COUNT(*) AS valuesCount FROM values WHERE indicator_id = ($1) AND period = ($2);", [ind, date])
	        .then(count => {
	        	var matchCount = count.valuescount;
				if(matchCount == 0) {
	            	return t.any("INSERT INTO values(indicator_id, period, value) VALUES (($1), ($2), ($3))", [ind, date, val]);

	            } else {
	            	return
	            }
				console.log('something4');
	        });
	})
    .then(events=> {
        console.log("this needs to be refactored.");
    })
    .catch(error=> {
        // error
		console.log(error);
    });
}

var processRecentData = function(res) {

	var formsN = res.objects.length;

	var dates = []

	for(var i = 0; i < formsN; i++) {
		var period = res.objects[i].form.date_reviewed
		if(res.objects[i].form.reception.reception_staff_present == "present") {
			console.log(period)
			updateOrInsert(1, period, 1)
		}
		if(res.objects[i].form.reception.reception_staff_present == "not_present") {
			console.log(period)
			updateOrInsert(1, period, 0)
		}
	}
	var val = '';
	return(val);
}

exports.pullRecentData = function(req, res) {

 
	var results = [];

	https.get("https://elijah@walimu.org:Mulago123@www.commcarehq.org/a/walimu/api/v0.5/form/?xmlns=http://openrosa.org/formdesigner/6BD53A61-5C35-44B9-AA77-8F59663FDA16&received_on_start=2016-07-17", function(data) {
		data.setEncoding('utf8');
		data.on('data', function(d) {
			results.push(d)
		});
		data.on('end', function() {
			results = JSON.parse(results);

			processRecentData(results)

			return res.json("[probablyWorked]")
		});
		data.on('error', function(e) {
			console.log(e)
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

		var query = client.query("SELECT * FROM indicators ORDER BY id ASC;");

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}
exports.readLastValue = function(req, res) {

	var results = [];

	var id = req.params.indicator_id;

	pg.connect(config.database.uri, function(err, client, done) {
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err });
		}

		var query = client.query("SELECT * FROM values WHERE indicator_id=($1) ORDER BY period DESC LIMIT 1", [id]);
		// WHERE indicator_id=($1) ORDER BY period ASC LIMIT 1 , [data.indicator_id]

		query.on('row', function(row) {
			results.push(row);
		});

		query.on('end', function() {
			done();
			return res.json(results);
		});
	});

}