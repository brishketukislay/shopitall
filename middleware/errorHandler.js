const {constants} = require('../constants')
const errorHandler = (err, req,res, next) =>{
    const statusCode = res.statusCode ? res.statusCode: 500;
    res.json({message: err.message, stackTree: err.stack})
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:'Validation failed',
                message: err.message,
                stackTrace: err.stack
            })
        case constants.NOT_FOUND:
            res.json({
                title: 'Not found',
                message: err.message,
                stackTrace: err.stack
            })
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            })
            case constants.UNAUTHORISED:
                res.json({
                    title: 'Unauthorised',
                    message: err.message,
                    stackTrace: err.stack
                })
                case constants.SERVER_ERROR:
                    res.json({
                        title: 'Server Error',
                        message: err.message,
                        stackTrace: err.stack
                    })
            default:
                console.log('No errors encountered');
                break;
    }
}

module.exports = errorHandler