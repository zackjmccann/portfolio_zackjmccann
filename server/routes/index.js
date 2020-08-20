const express = require('express');
// const jwt = require('jsonwebtoken'); 
const router = express.Router();

var signup_controller = require('../controllers/signup.controller');

// POST signup page
router.post('/signup', signup_controller.signup_post);

module.exports = router;
