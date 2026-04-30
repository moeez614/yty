const express = require('express')
const router = express.Router()

const {
    createStaff,
    getstaff,
    setRecord,
    deleteRecord,
    Gate
} = require("../controllers/staffControl")

router.post('/staff', createStaff)
router.get('/staff', getstaff)
router.get('/record', setRecord)
router.delete('/record/:id', deleteRecord)
router.get('/gate', Gate)

module.exports = router