const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:beta@alpha-mdb-test-bk7ru.mongodb.net/test?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const saveFrame = async (frame) =>
{
    const client = await MongoClient.connect(uri, options);
    const db = client.db('cod-19');
    const saved = await db.collection('frames').insertOne(frame);
    
    return saved;
};

module.exports = saveFrame;
