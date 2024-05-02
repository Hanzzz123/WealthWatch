export const errorHandler = (err,req,res,next)=>{
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.NODE === 'production' ? null : err?.stack,
    });
}

export default errorHandler;