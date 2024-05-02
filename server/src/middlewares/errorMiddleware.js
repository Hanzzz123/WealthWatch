export const errorHandler = (err,req,res,next)=>{
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.NODE === 'production' ? null : err?.stack,
    });
}

// not found
export const notFound = ( req, res, next) =>{
    const error = new Error(`Not found -${req?.originalUrl}`);
    res.status(404);
    next(error)
}

export default {errorHandler,notFound};
