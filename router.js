var cronRouter = require('./routes/cron');

module.exports= (app)=>{
    app.use('/cron', cronRouter);
}