const { MongoClient } = require("mongodb");
// Connection URI
const uri =
    "mongodb://cgu:cgu@0.tcp.jp.ngrok.io:17394/?authSource=admin";
// Create a new MongoClient
const client = new MongoClient(uri);
const ID = "TMDQH_wAAAAJ"
async function run(userID) {
    var userProfile = "null"
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
        const db = client.db("CGUScholar_com")
        userProfile = await db.collection('cguscholar').findOne({ _id: userID });
        return userProfile

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }


}
export default function FromMongoDB(userID) {
    run(userID).then(bar => {
        console.log(bar)
    })
}