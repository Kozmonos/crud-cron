const nodecron = require("node-cron")
const axios = require("axios")

module.exports.sendRequest = (data) => {
    return new Promise((resolve, reject) => {
        finalData = Object.assign({
            method: "POST",
            url: ""
        }, data)

        axios({ method: finalData.method, url: finalData.url })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

module.exports.setCron = (scheduleTime = "* * * * *", requestData) => {
    nodecron.schedule(scheduleTime, async () => {
        this.sendRequest(requestData)
            .then(data => console.log(data))
            .catch(e => console.log(e))
    })
}

module.exports.setupAllCron = async () => {
    const { getCrons } = require("./dbFunctions")
    getCrons()
        .then(crons =>
            crons.forEach(element =>
                this.setCron(element.time, { url: element.url, method: element.method })
            )
        )
}