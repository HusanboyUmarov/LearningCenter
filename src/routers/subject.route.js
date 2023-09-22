const { get, getOne, add, remove, reset } = require('../controllers/subject.controller')

const router = require('express').Router()

router.get('/subject/',get )
router.get('/subject/getOne/:id',getOne)
router.post('/subject/add', add )
router.delete('/subject/del/:id',remove )
router.put('/subject/reset/:id',reset)

module.exports = router;