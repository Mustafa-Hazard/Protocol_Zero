using GameDiscovery.API.DTOs;
using GameDiscovery.API.Repositories;
using GameDiscovery.API.Models;

namespace GameDiscovery.API.Services
{
    public class GenreService : IGenreService
    {
        private readonly IGenreRepository _genreRepository;

        public GenreService(IGenreRepository genreRepository)
        {
            _genreRepository = genreRepository;
        }

        public async Task<ApiResponseDto<List<GenreDto>>> GetAllAsync()
        {
            try
            {
                var genres = await _genreRepository.GetAllAsync();
                var dtos = genres.Select(g => new GenreDto
                {
                    Id = g.Id ?? string.Empty,
                    Name = g.Name
                }).ToList();

                return ApiResponseDto<List<GenreDto>>.Ok(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponseDto<List<GenreDto>>.Fail($"Failed to retrieve genres: {ex.Message}");
            }
        }
    }
}