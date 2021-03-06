const router = require('express').Router();

router.use('/films',require('./films'));
router.use('/halls',require('./halls'));
router.use('/sessions', require('./sessions'));
router.use('/users', require('./users'));
router.use('/places', require('./places'));
router.use('/selectedPlaces', require('./selectedPlaces'));

module.exports = router
