using Microsoft.AspNetCore.Mvc;
using GameDiscovery.API.DTOs;
using GameDiscovery.API.Services;

namespace GameDiscovery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlatformsController : ControllerBase
    {
        private readonly IPlatformService _platformService;

        public PlatformsController(IPlatformService platformService)
        {
            _platformService = platformService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _platformService.GetAllAsync();

            if (!result.Success)
                return StatusCode(500, result);

            return Ok(result);
        }
    }
}