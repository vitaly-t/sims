var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE unit_indicators(id SERIAL PRIMARY KEY, unit_id SERIAL, indicator_id SERIAL)');
query.on('end', function() { client.end(); });