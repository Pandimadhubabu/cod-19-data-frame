const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:beta@alpha-mdb-test-bk7ru.mongodb.net/test?retryWrites=true&w=majority";
const options =
{
    useNewUrlParser: true, 
    poolSize: 1,
    useUnifiedTopology: true
};
const client = new MongoClient(uri, options);
const saveFrame = (frame) =>
{
    client.connect(err => 
    {
        if(!err)
        {
            const collection = client.db("cod-19").collection("frames");
            collection.insertOne(frame);
            client.close();
        }
        else
        {
            console.error(err);
        }        
    });   
};

module.exports = saveFrame;
