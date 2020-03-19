const findAll = require('./mongo').findAll;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: '*' }));
app.get(`/find-all`, async (req, res) =>
{
    const found = await findAll().catch(e => console.log(e))
    res.send(found);
});
app.listen(4212, ()=> console.log('👍'));
