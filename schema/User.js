var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE user(id SERIAL PRIMARY KEY, email VARCHAR(300) not null, password VARCHAR(300) not null)');
query.on('end', function() { client.end(); });