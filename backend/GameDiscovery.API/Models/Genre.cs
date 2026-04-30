using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GameDiscovery.API.Models
{
    public class Genre
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;
    }
}