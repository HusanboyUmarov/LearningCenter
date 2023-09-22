const fileUpload = require('../middleware/fileUpload')
const { reset, add, remove, get, getOne } = require('../controllers/pupils.controller')
const router = require('express').Router()

router.get('/student/',get)
router.get('/student/getOne/:id', getOne)
router.post('/student/add',fileUpload, add )
router.put('/student/put/:id',reset)
router.delete('/student/del/:id', remove)




module.exports = router;