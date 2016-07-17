var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE values(id SERIAL PRIMARY KEY, indicator_id SERIAL, period DATE, value INTEGER)');
query.on('end', function() { client.end(); });