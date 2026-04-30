using GameDiscovery.API.DTOs;

namespace GameDiscovery.API.Services
{
    public interface IGenreService
    {
        Task<ApiResponseDto<List<GenreDto>>> GetAllAsync();
    }
}