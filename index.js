'use strict';

require('dotenv').config();
let CronJob = require('cron').CronJob;

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

new CronJob('* * * * *', function() {
    let imageFolder = 'memepack';
    let fs = require('fs');
//take random pic
    fs.readdir(imageFolder, function(err,files) {
        let rf = files[Math.floor(Math.random()*files.length)];
        bot.sendPhoto('@' + process.env.CHANNEL, 'memepack/' + rf);
        fs.rename('memepack/' + rf, 'memepack_posted/' + rf, (err) => {
            if (err) throw err;
        });
    });
}, null, true, 'Europe/Kiev');



