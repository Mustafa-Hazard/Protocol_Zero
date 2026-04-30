namespace GameDiscovery.API.DTOs
{
    public class ApiResponseDto<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public T? Data { get; set; }
        public int? TotalCount { get; set; }

        public static ApiResponseDto<T> Ok(T data, int? totalCount = null) => new()
        {
            Success = true,
            Message = "OK",
            Data = data,
            TotalCount = totalCount
        };

        public static ApiResponseDto<T> Fail(string message) => new()
        {
            Success = false,
            Message = message
        };
    }
}