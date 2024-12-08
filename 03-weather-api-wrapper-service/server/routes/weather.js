const express = require('express');

const router = express.Router();

const {
    getWeather
} = require('../controllers/weather');

router.route('/weather/:cityCodeID').get(getWeather)


module.exports = router;