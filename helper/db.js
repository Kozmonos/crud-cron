const mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => {
		console.log("success db connect");
	})
	.catch(err => {
		console.log("error db connect");

	})