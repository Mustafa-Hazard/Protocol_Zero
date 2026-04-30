using GameDiscovery.API.DTOs;
using GameDiscovery.API.Repositories;
using GameDiscovery.API.Models;

namespace GameDiscovery.API.Services
{
    public class PlatformService : IPlatformService
    {
        private readonly IPlatformRepository _platformRepository;

        public PlatformService(IPlatformRepository platformRepository)
        {
            _platformRepository = platformRepository;
        }

        public async Task<ApiResponseDto<List<PlatformDto>>> GetAllAsync()
        {
            try
            {
                var platforms = await _platformRepository.GetAllAsync();
                var dtos = platforms.Select(p => new PlatformDto
                {
                    Id = p.Id ?? string.Empty,
                    Name = p.Name,
                    Slug = p.Slug
                }).ToList();

                return ApiResponseDto<List<PlatformDto>>.Ok(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponseDto<List<PlatformDto>>.Fail($"Failed to retrieve platforms: {ex.Message}");
            }
        }
    }
}