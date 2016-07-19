var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sims';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR, email VARCHAR, password VARCHAR, isActive BOOLEAN, timeCreated TIMESTAMP, resetPasswordToken VARCHAR, resetPasswordExpires TIMESTAMP, role_admin INTEGER, role_account INTEGER)');
query.on('end', function() { client.end(); });