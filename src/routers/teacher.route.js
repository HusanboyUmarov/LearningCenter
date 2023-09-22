const { get, add, getOne, remove, reset } = require('../controllers/teachers.controller');
const fileUpload = require('../middleware/fileUpload');

const router = require('express').Router()

router.get('/teacher/',get )
router.get('/teacher/getOne/:id',getOne)
router.post('/teacher/add',fileUpload, add )
router.delete('/teacher/del/:id',remove )
router.put('/teacher/reset/:id',reset)

module.exports = router;