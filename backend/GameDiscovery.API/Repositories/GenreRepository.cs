using MongoDB.Driver;
using GameDiscovery.API.Models;

namespace GameDiscovery.API.Repositories
{
    public class GenreRepository : IGenreRepository
    {
        private readonly IMongoCollection<Genre> _genres;

        public GenreRepository(MongoDbContext context)
        {
            _genres = context.Genres;
        }

        public async Task<List<Genre>> GetAllAsync()
        {
            return await _genres.Find(_ => true).ToListAsync();
        }
    }
}