using GameDiscovery.API.Models;
using GameDiscovery.API.DTOs;

namespace GameDiscovery.API.Repositories
{
    public interface IGameRepository
    {
        Task<(List<Game> Games, long TotalCount)> GetAllAsync(GameQueryDto query);
        Task<Game?> GetByIdAsync(string id);
        Task CreateAsync(Game game);
        Task UpdateAsync(string id, Game game);
        Task DeleteAsync(string id);
    }
}