const express = require('express')
const router = express.Router()

const {
    googleLogin
} = require('../controllers/GoogleController')

router.post('/auth/google/callback', googleLogin)

module.exports = router