const express = require('express')
const router = express.Router()
const {
    getdisease,
    getrecord,
    deleterecord,
    graph
} = require('../controllers/disease')

router.post('/disease', getdisease)
router.get('/diseaserecord', getrecord)
router.delete('/diseasedelete/:id', deleterecord)
router.get('/graph', graph)

module.exports = router