const { get, getOne, add } = require('../controllers/payment.controller');

const router = require('express').Router()

router.get('/payment/',get)
router.get('/payment/getOne/:id', getOne)
router.post('/payment/add', add)


module.exports = router;