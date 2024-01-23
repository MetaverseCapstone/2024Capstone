using MongoDB.Bson;
using MongoDB.Driver;
using UnityEngine;


public class DBTest : MonoBehaviour
{
    private static string connectionString = "mongodb://localhost:27017";
    private string databaseName = "user_db";
    private string collectionName = "user";

    MongoClient client = new MongoClient(connectionString);
    IMongoDatabase database;
    IMongoCollection<BsonDocument> collection;


    private void Awake()
    {

    }


    // Start is called before the first frame update
    void Start()
    {
        database = client.GetDatabase(databaseName);
        collection = database.GetCollection<BsonDocument>(collectionName);

        // Test
        var document = new BsonDocument { { "id", "admin" }, { "email", "admin@test.com" }, { "pw", "admin" } };
        collection.InsertOne(document);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
