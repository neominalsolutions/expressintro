var express = require('express');
var router = express.Router();

// routes klasöründe herşey bir controller
// router.get() ise bir ACTİON

/* GET home page. */
router.get('/', function (req, res, next) {
	//throw Error('hata'); // exception
	// req:request
	// res: response
	// next: ile süreci değer middleware geçirme işlemi
	// res.render => return view('index', model);
	const model = { title: 'Express' };
	res.render('index', model);
});

router.get('/about', function (req, res) {
	res.render('about', { title: 'Hakkımızda', content: 'içerik' });
});

router.get('/contact', (req, res) => {
	res.render('contact', { title: 'İletişim' });
});

module.exports = router;
