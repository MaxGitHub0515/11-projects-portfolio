
const { StatusCodes } = require('http-status-codes')


const notFound = (req, res) => {
    res.status(StatusCodes.notFound).send('Route does not exist');

}