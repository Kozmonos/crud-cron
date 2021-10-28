const dbFunctions = require('../helper/dbFunctions');
module.exports.get = (req, res, next) => next(dbFunctions.getCrons())
module.exports.add = (req, res, next) => next(dbFunctions.addCron(req.body))
module.exports.delete = (req, res, next) => next(dbFunctions.deleteCron(req.params._id, req.body))
module.exports.update = (req, res, next) => next(dbFunctions.updateCron(req.params._id, req.body))
module.exports.count = (req, res, next) => next(dbFunctions.countCron())