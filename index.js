var CronJob = require('cron').CronJob;
const moment = require('moment')

// const job = new CronJob('0,15,0,15 * * * * *', function() { // this will only run 2x per minute, not 4
const job = new CronJob('*/15 * * * * *', function () { // correct syntax
    console.log(moment().format('h:mm:ss a'));
}, null, true, 'America/New_York');
job.start();