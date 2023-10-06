const express = require('express');
const router = express.Router();
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts')); // app.METHOD(PATH/PATTERN, HANDLER) where PATH is a path on the server


module.exports = router;
