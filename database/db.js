const { DataSource } = require('typeorm');
const PersonEntity = require('../entities/person.entity');

var dataSource = new DataSource({
	type: 'mongodb',
	host: '127.0.0.1', // localhost demek
	port: 27017,
	database: 'testDb',
	entities: [PersonEntity],
});

// dbye bağlan
dataSource
	.initialize()
	.then(() => {
		console.log('mongo is connected');
	})
	.catch((err) => {
		console.log('mongo err', err);
	});

module.exports = dataSource;
