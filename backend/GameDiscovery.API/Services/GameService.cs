using GameDiscovery.API.DTOs;
using GameDiscovery.API.Repositories;
using GameDiscovery.API.Models;

namespace GameDiscovery.API.Services
{
    public class GameService : IGameService
    {
        private readonly IGameRepository _gameRepository;

        public GameService(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        public async Task<ApiResponseDto<List<GameDto>>> GetAllAsync(GameQueryDto query)
        {
            try
            {
                var (games, totalCount) = await _gameRepository.GetAllAsync(query);
                var dtos = games.Select(MapToDto).ToList();
                return ApiResponseDto<List<GameDto>>.Ok(dtos, (int)totalCount);
            }
            catch (Exception ex)
            {
                return ApiResponseDto<List<GameDto>>.Fail($"Failed to retrieve games: {ex.Message}");
            }
        }

        public async Task<ApiResponseDto<GameDto>> GetByIdAsync(string id)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(id))
                    return ApiResponseDto<GameDto>.Fail("Invalid game ID.");

                var game = await _gameRepository.GetByIdAsync(id);

                if (game == null)
                    return ApiResponseDto<GameDto>.Fail("Game not found.");

                return ApiResponseDto<GameDto>.Ok(MapToDto(game));
            }
            catch (Exception ex)
            {
                return ApiResponseDto<GameDto>.Fail($"Failed to retrieve game: {ex.Message}");
            }
        }

        private static GameDto MapToDto(Game game) => new()
        {
            Id = game.Id ?? string.Empty,
            Title = game.Title,
            Description = game.Description,
            CoverImage = game.CoverImage,
            ReleaseDate = game.ReleaseDate.ToString("yyyy-MM-dd"),
            Rating = game.Rating,
            Genres = game.Genres,
            Platforms = game.Platforms,
            RelevanceScore = game.RelevanceScore
        };
    }
}