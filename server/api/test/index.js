'use strict'

const express = require('express');
const controller = require('./test.controller');
const router = express.Router();

router.get('/', controller.test);

module.exports = router;
