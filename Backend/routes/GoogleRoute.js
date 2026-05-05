const express = require('express')
const router = express.Router()

const {
    googleLogin,
    talash
} = require('../controllers/GoogleController')

router.post('/auth/google/callback', googleLogin)
router.get('/api/talash' , talash)

module.exports = router