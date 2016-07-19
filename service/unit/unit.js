'use strict';

var pg = require('pg');
var pgp = require('pg-promise');
var path = require('path');
var config = require('../../config')

function getNumberIndicators(id) {
  return 1;
  pg.connect(config.database.uri, function(err, client, done) {
    var query = client.query("SELECT * FROM indicators INNER JOIN unitIndicators ON unitIndicators.indicator_id = indicators.id WHERE unitIndicators.unit_id = ($1);", [id]);
    query.on('row', function(row) {
      results.push(row)
    });
    query.on('end', function() {
      done();
      return res.json(results.length);
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

    var query = client.query("SELECT * FROM units ORDER BY id ASC;")

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });

}


exports.readIndicators = function(req, res) {

  var results = [];

  var id = req.params.id;

  pg.connect(config.database.uri, function(err, client, done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ sucesss: false, data: err});
    }

    var query = client.query("SELECT * FROM indicators INNER JOIN unitIndicators ON unitIndicators.indicator_id = indicators.id WHERE unitIndicators.unit_id = ($1);", [id]);

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });

}