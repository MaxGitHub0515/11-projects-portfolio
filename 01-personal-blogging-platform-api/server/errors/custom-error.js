
// custom error

class CustomAPIError extends Error {
    constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode || 500;
    // For production
    this.stack = undefined; // disabling stack trace

    }
}
// create custom error
const createCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg, statusCode);
}


module.exports = { CustomAPIError, createCustomError }


