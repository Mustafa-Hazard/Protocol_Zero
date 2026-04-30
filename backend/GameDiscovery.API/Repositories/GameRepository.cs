using MongoDB.Driver;
using GameDiscovery.API.Models;
using GameDiscovery.API.DTOs;

namespace GameDiscovery.API.Repositories
{
    public class GameRepository : IGameRepository
    {
        private readonly IMongoCollection<Game> _games;

        public GameRepository(MongoDbContext context)
        {
            _games = context.Games;
        }

        public async Task<(List<Game> Games, long TotalCount)> GetAllAsync(GameQueryDto query)
        {
            var filter = Builders<Game>.Filter.Empty;

            if (!string.IsNullOrWhiteSpace(query.Search))
            {
                filter &= Builders<Game>.Filter.Regex(
                    g => g.Title,
                    new MongoDB.Bson.BsonRegularExpression(query.Search, "i")
                );
            }

            if (query.Genres != null && query.Genres.Count > 0)
            {
                filter &= Builders<Game>.Filter.AnyIn(g => g.Genres, query.Genres);
            }

            if (query.Platforms != null && query.Platforms.Count > 0)
            {
                filter &= Builders<Game>.Filter.AnyIn(g => g.Platforms, query.Platforms);
            }

            var sortDefinition = query.SortBy switch
            {
                "rating" => Builders<Game>.Sort.Descending(g => g.Rating),
                "releaseDate" => Builders<Game>.Sort.Descending(g => g.ReleaseDate),
                "title" => Builders<Game>.Sort.Ascending(g => g.Title),
                _ => Builders<Game>.Sort.Descending(g => g.RelevanceScore)
            };

            var totalCount = await _games.CountDocumentsAsync(filter);

            var games = await _games
                .Find(filter)
                .Sort(sortDefinition)
                .Skip((query.Page - 1) * query.PageSize)
                .Limit(query.PageSize)
                .ToListAsync();

            return (games, totalCount);
        }

        public async Task<Game?> GetByIdAsync(string id)
        {
            return await _games
                .Find(g => g.Id == id)
                .FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Game game)
        {
            await _games.InsertOneAsync(game);
        }

        public async Task UpdateAsync(string id, Game game)
        {
            await _games.ReplaceOneAsync(g => g.Id == id, game);
        }

        public async Task DeleteAsync(string id)
        {
            await _games.DeleteOneAsync(g => g.Id == id);
        }
    }
}