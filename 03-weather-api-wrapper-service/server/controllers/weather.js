const { StatusCodes } = require("http-status-codes");

const asyncWrapper = require('../middleware/async');
const {
    client,

} = require('../app')
const axios = require('axios')
const getWeather = asyncWrapper(async(req, res) => {
    const { cityCode } = req.params;
    //cached data
    const cachedData = await client.get(cityCode)
    if (cachedData) {
        return res.json(JSON.parse(cachedData)); // cached data  in "" which .parse eliminates
    }
    // If not in cache, fetch from API via axios
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityCode}`, {
        params: {
            unitGroup: 'metric',
            key: process.env.VISUAL_CROSSING_API_KEY,
        }
    });

    const weatherData = response.data;


})



module.exports = {
    getWeather
}