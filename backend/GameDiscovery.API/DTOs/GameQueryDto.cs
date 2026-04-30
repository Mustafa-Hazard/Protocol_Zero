using System.ComponentModel.DataAnnotations;

namespace GameDiscovery.API.DTOs
{
    public class GameQueryDto
    {
        public string? Search { get; set; }

        [RegularExpression("relevance|rating|releaseDate|title",
            ErrorMessage = "SortBy must be one of: relevance, rating, releaseDate, title")]
        public string SortBy { get; set; } = "relevance";

        public List<string>? Genres { get; set; }

        public List<string>? Platforms { get; set; }

        [Range(1, 100, ErrorMessage = "Page must be between 1 and 100")]
        public int Page { get; set; } = 1;

        [Range(1, 50, ErrorMessage = "PageSize must be between 1 and 50")]
        public int PageSize { get; set; } = 20;
    }
}