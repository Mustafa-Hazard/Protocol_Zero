using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GameDiscovery.API.Models
{
    public class Game
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; } = string.Empty;

        [BsonElement("description")]
        public string Description { get; set; } = string.Empty;

        [BsonElement("coverImage")]
        public string CoverImage { get; set; } = string.Empty;

        [BsonElement("releaseDate")]
        public DateTime ReleaseDate { get; set; }

        [BsonElement("rating")]
        public double Rating { get; set; }

        [BsonElement("genres")]
        public List<string> Genres { get; set; } = new();

        [BsonElement("platforms")]
        public List<string> Platforms { get; set; } = new();

        [BsonElement("relevanceScore")]
        public int RelevanceScore { get; set; }
    }
}