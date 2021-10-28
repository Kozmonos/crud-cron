const Cron = require('../schema/Cron');
module.exports.getCrons = () => {
    return Cron.find({})
}
module.exports.addCron = (body) => {
    const cron = new Cron(body)
    return cron.save()
}

module.exports.deleteCron = (id, body) => {
    return Cron.findByIdAndDelete(id, body)
}

module.exports.updateCron = (id, body) => {
    return Cron.findByIdAndUpdate(id, body, { new: true })
}
module.exports.countCron = () => {
    return new Promise((resolve, reject) => {
        const query = Cron.find();
        query.count((err, count) => {
            err
                ? reject(err)
                : resolve({ count })
        })
    });

}
