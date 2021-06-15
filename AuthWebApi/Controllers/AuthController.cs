using Microsoft.AspNetCore.Mvc;
using CoreAuthPrj.Dtos;
using CoreAuthPrj.Services;
using Microsoft.Extensions.Options;
using CoreAuthPrj.Helpers;

namespace CoreAuthPrj.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        private readonly AppSettings _appSettings;

        public AuthController(IAuthService authService, IOptions<AppSettings> appSettings)
        {
            _authService = authService;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        public IActionResult Login([FromBody] AuthRequest request)
        {
            var response = _authService.Authenticate(request);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

    }
}
