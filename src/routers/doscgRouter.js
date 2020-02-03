const express = require('express')
const router = express.Router()

const DoscgController = require('../controllers/doscgController')

router.get('/1', DoscgController.findingXYZ)
router.get('/2', DoscgController.findingBC)
router.get('/3', DoscgController.findingDistance)

module.exports = router