using GameDiscovery.API.DTOs;

namespace GameDiscovery.API.Services
{
    public interface IPlatformService
    {
        Task<ApiResponseDto<List<PlatformDto>>> GetAllAsync();
    }
}