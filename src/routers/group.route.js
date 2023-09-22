const { get, getOne, add, reset, remove } = require('../controllers/groups.controller')

const router = require('express').Router()


router.get('/groups/',get )
router.get('/groups/:id',getOne)
router.post('/groups/add',add)
router.put('/groups/put/:id',reset)
router.delete('/groups/del/:id',remove)

module.exports = router;