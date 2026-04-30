using MongoDB.Driver;
using GameDiscovery.API.Models;
using Microsoft.Extensions.Configuration;

namespace GameDiscovery.API.Repositories
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var connectionString = configuration["MongoDB:ConnectionString"];
            var databaseName = configuration["MongoDB:DatabaseName"];

            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<Game> Games =>
            _database.GetCollection<Game>("games");

        public IMongoCollection<Genre> Genres =>
            _database.GetCollection<Genre>("genres");

        public IMongoCollection<Platform> Platforms =>
            _database.GetCollection<Platform>("platforms");
    }
}