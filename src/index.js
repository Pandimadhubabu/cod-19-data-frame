const saveFrame = require('./mongo').saveFrame;
const pushUpdate = require('./pusher')
const scheduler = require('node-cron');
const getBingData = require('./bing-data');

scheduler.schedule('35 * * * *', async () =>
{
    const data = await getBingData();
    const time = new Date().toUTCString();
    const frame = {time, data};
    saveFrame(frame);
    pushUpdate(frame); 
});