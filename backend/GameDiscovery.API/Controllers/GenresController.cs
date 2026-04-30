using Microsoft.AspNetCore.Mvc;
using GameDiscovery.API.DTOs;
using GameDiscovery.API.Services;

namespace GameDiscovery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenresController : ControllerBase
    {
        private readonly IGenreService _genreService;

        public GenresController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _genreService.GetAllAsync();

            if (!result.Success)
                return StatusCode(500, result);

            return Ok(result);
        }
    }
}