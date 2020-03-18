const saveFrame = require('./mongo');
const pushUpdate = require('./pusher')
const scheduler = require('node-cron');
const getBingData = require('./bing-data');

scheduler.schedule('*/1 * * * *', async () =>
{
    const data = await getBingData();
    const time = new Date(new Date().toUTCString()).toJSON();
    const frame = { time, data};
    saveFrame(frame);
    pushUpdate(frame); 
});