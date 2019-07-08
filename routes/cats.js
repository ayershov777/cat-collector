const router = require('express').Router();
const catsCtrl = require('../controllers/cats');

router.get('/', catsCtrl.index);
router.post('/', catsCtrl.createCat);

module.exports = router;