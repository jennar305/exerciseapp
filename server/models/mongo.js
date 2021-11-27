const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://exercise:app@cluster0.mh3bg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// @ts-ignore
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const isConnected = client.connect();


module.exports = {
    client, isConnected
}

