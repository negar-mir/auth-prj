namespace CoreAuthPrj.Models
{
    public class AuthResponse
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }


        public AuthResponse(User user, string token)
        {
            Id = user.Id;
            Firstname = user.Firstname;
            Lastname = user.Lastname;
            Username = user.Username;
            Token = token;
        }
    }
}
