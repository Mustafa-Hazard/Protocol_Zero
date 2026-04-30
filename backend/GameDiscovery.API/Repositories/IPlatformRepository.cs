using GameDiscovery.API.Models;

namespace GameDiscovery.API.Repositories
{
    public interface IPlatformRepository
    {
        Task<List<Platform>> GetAllAsync();
    }
}