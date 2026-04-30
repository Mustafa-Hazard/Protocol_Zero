namespace GameDiscovery.API.DTOs
{
    public class GameDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string CoverImage { get; set; } = string.Empty;
        public string ReleaseDate { get; set; } = string.Empty;
        public double Rating { get; set; }
        public List<string> Genres { get; set; } = new();
        public List<string> Platforms { get; set; } = new();
        public int RelevanceScore { get; set; }
    }
}