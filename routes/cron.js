var express = require('express');
var nodecron = require('node-cron');
var router = express.Router();

const cron = require('../controller/cron');

router.get('/', cron.get);
router.get('/count', cron.count);
router.post('/', cron.add);
router.delete('/:_id', cron.delete);
router.put('/:_id', cron.update);

module.exports = router;