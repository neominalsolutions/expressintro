var express = require('express');
const dataSource = require('../database/db');
const PersonEntity = require('../entities/person.entity');
var router = express.Router();

// datasource üzerinden repositorylere bağlanıulıyor
// repository yazmamıza gerek yok
const personRepo = dataSource.getRepository(PersonEntity);

/* GET users listing. */
router.get('/', function (req, res, next) {


  // save hem insert hem update yapar, kayıt yoksa insert kayıt varsa update eder
	personRepo
		.save({
			name: 'Gamze',
			friends: ['ali', 'hasan', 'can'],
			profile: { theme: 'dark' },
		})
		.then((data) => {
			console.log('save-result', data);
		});

    // tüm verileri getir.
	// personRepo.find().then((data) => {
	// 	console.log('data', data);
	// });

	res.send('respond with a resource');
});

module.exports = router;
