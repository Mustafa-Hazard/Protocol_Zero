using MongoDB.Driver;
using GameDiscovery.API.Models;

namespace GameDiscovery.API.Repositories
{
    public class PlatformRepository : IPlatformRepository
    {
        private readonly IMongoCollection<Platform> _platforms;

        public PlatformRepository(MongoDbContext context)
        {
            _platforms = context.Platforms;
        }

        public async Task<List<Platform>> GetAllAsync()
        {
            return await _platforms.Find(_ => true).ToListAsync();
        }
    }
}