var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE units(id SERIAL PRIMARY KEY, name VARCHAR(100) not null, organization_id SERIAL)');
query.on('end', function() { client.end(); });