using System.ComponentModel.DataAnnotations;

namespace CoreAuthPrj.Dtos
{
    public class AuthRequest
    {
        [Required(ErrorMessage = "Username is required.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; }
    }
}
