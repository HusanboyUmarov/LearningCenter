const { get, getOne, add, reset, remove } = require('../controllers/daomat.controller')

const router = require('express').Router()

router.get('/davomat/', get)
router.get('/davomat/:id',getOne)
router.post('/davomat/add',add)
router.put('/davomat/put/:id',reset)
router.delete('/davomat/del/:id',remove)

module.exports = router;