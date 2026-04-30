using GameDiscovery.API.DTOs;

namespace GameDiscovery.API.Services
{
    public interface IGameService
    {
        Task<ApiResponseDto<List<GameDto>>> GetAllAsync(GameQueryDto query);
        Task<ApiResponseDto<GameDto>> GetByIdAsync(string id);
    }
}