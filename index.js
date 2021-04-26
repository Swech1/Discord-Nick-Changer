const names = require('fs').readFileSync('names.txt', 'utf8').split('\n');
const request = require('request-promise');
const config = require('./config.json');
const serverID = config.serverID;
const token = config.token;

let counter = 0;

setInterval(() => {
    request({
        url: `https://discordapp.com/api/v6/guilds/${serverID}/members/@me/nick`,
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', authorization: token },
        json: { nick: names[counter++] }
    }).catch(() => { });
    if (counter >= names.length) counter = 0;
}, 1024);