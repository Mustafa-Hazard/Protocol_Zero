using Microsoft.AspNetCore.Mvc;
using GameDiscovery.API.DTOs;
using GameDiscovery.API.Services;

namespace GameDiscovery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly IGameService _gameService;

        public GamesController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] GameQueryDto query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ApiResponseDto<object>.Fail("Invalid query parameters."));

            var result = await _gameService.GetAllAsync(query);

            if (!result.Success)
                return StatusCode(500, result);

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            if (string.IsNullOrWhiteSpace(id))
                return BadRequest(ApiResponseDto<object>.Fail("ID cannot be empty."));

            var result = await _gameService.GetByIdAsync(id);

            if (!result.Success)
                return NotFound(result);

            return Ok(result);
        }
    }
}