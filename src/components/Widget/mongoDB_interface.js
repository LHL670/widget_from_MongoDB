const { MongoClient } = require("mongodb");
// Connection URI
const uri =
    "mongodb://reactInterface:reactInterfacepwd@120.126.17.90:27017/?authSource=admin";
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
        const db = client.db("CGUScholar")
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