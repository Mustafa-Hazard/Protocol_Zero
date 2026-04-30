using GameDiscovery.API.Repositories;
using GameDiscovery.API.Services;

namespace GameDiscovery.API.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // MongoDB Context
            services.AddSingleton<MongoDbContext>();

            // Repositories
            services.AddScoped<IGameRepository, GameRepository>();
            services.AddScoped<IGenreRepository, GenreRepository>();
            services.AddScoped<IPlatformRepository, PlatformRepository>();

            // Services
            services.AddScoped<IGameService, GameService>();
            services.AddScoped<IGenreService, GenreService>();
            services.AddScoped<IPlatformService, PlatformService>();

            return services;
        }
    }
}