using GameDiscovery.API.Models;

namespace GameDiscovery.API.Repositories
{
    public interface IGenreRepository
    {
        Task<List<Genre>> GetAllAsync();
    }
}