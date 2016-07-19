var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE accounts(id SERIAL PRIMARY KEY, userid INTEGER, username VARCHAR(100) not null, isVerified BOOLEAN, verificationToken VARCHAR(512), firstName VARCHAR(100), lastName VARCHAR(100), organization INT)');
query.on('end', function() { client.end(); });