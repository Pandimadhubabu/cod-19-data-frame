const Pusher = require('pusher');
const pusher_options = 
{
    appId: '965139',
    key: '9bd67bf110a3705246b7',
    secret: '611b881b3f1a8d25c95e',
    cluster: 'us2',
    useTLS: true,
};
const pusher = new Pusher(pusher_options);
const pushUpdate = (data) => pusher.trigger('cod-19', 'update', data);

module.exports = pushUpdate;