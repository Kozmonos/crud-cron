const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CronSchema = new Schema({
	time: {
		type: 'string',
		required: true
	},
	url: {
		type: 'string',
		required: true
	},
	method: {
		type: 'string',
		required: true
	},
	query: {
		type: Object
	},
	body: {
		type: Object
	},
	tag: {
		type: String
	},
	name: {
		type: String,
		required: true
	}
}, { collection: "cron" })

const Cron = mongoose.model("cron", CronSchema);

module.exports = Cron;