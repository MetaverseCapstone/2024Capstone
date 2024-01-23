using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Bson;
using MongoDB.Driver;

public class DBManager : MonoBehaviour
{
    private static string connectionString = "mongodb://localhost:27017";
    private string assetDatabaseName = "asset_db";
    private string assetCollectionName = "assets";

    protected MongoClient client = new MongoClient(connectionString);
    protected IMongoDatabase assetDatabase;
    protected IMongoCollection<BsonDocument> assetCollection;

    public static DBManager instance;

    private void Awake()
    {
        if (DBManager.instance == null)
        {
            DBManager.instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    

    // Start is called before the first frame update
    void Start()
    {
        try
        {
            assetDatabase = client.GetDatabase(assetDatabaseName);
            assetCollection = assetDatabase.GetCollection<BsonDocument>(assetCollectionName);
        }
        catch
        {
            Debug.Log("DB Connection Failed");
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
