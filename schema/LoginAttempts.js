var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE login_attempts(id SERIAL PRIMARY KEY, ip VARCHAR, username VARCHAR, time TIMESTAMP default now())');
query.on('end', function() { client.end(); });