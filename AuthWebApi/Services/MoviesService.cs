using CoreAuthPrj.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAuthPrj.Services
{
    public class MoviesService : IMoviesService
    {
        private List<MovieResponse> _movies = new List<MovieResponse>()
            {
                new MovieResponse() { Id = 1, Title = "The Shawshank Redemption", Director = "Frank Darabont", Rate = "9.3" },
                new MovieResponse() { Id = 2, Title = "The Godfather ", Director = "Francis Ford Coppola", Rate = "9.2" },
                new MovieResponse() { Id = 3, Title = "Fight Club", Director = "David Fincher", Rate = "8.8" },
                new MovieResponse() { Id = 4, Title = "Indiana Jones and the Last Crusade", Director = "Steven Spielberg", Rate = "8.3" },
                new MovieResponse() { Id = 5, Title = "Star Wars: Episode V - The Empire Strikes Back", Director = "Irvin Kershner", Rate = "8.8" },
                new MovieResponse() { Id = 6, Title = "Star Wars: Episode IV - The Empire Strikes Back", Director = "Irvin Kershner", Rate = "8.8" },
                new MovieResponse() { Id = 7, Title = "The Lord of the Rings: The Fellowship of the Ring", Director = "Peter Jackson", Rate = "8.8" },
                new MovieResponse() { Id = 8, Title = "One Flew Over the Cuckoo's Nest", Director = "Milos Forman", Rate = "8.8" },
                new MovieResponse() { Id = 9, Title = "Inception", Director = "Christopher Nolan", Rate = "8.8" },
                new MovieResponse() { Id = 10, Title = "Goodfellas", Director = "Martin Scorsese", Rate = "8.7" },
                new MovieResponse() { Id = 11, Title = "Star Wars", Director = "George Lucas", Rate = "8.7" },
                new MovieResponse() { Id = 12, Title = "Forrest Gump", Director = "Robert Zemeckis", Rate = "8.7" },
                new MovieResponse() { Id = 13, Title = "The Matrix", Director = "Andy Wachowski, Lana Wachowski", Rate = "8.7" },
                new MovieResponse() { Id = 14, Title = "The Lord of the Rings: The Two Towers", Director = "Peter Jackson", Rate = "8.7" },
                new MovieResponse() { Id = 15, Title = "City of God", Director = "Fernando Meirelles, Ktia Lund", Rate = "8.7" },
                new MovieResponse() { Id = 16, Title = "Se7en", Director = "David Fincher", Rate = "8.7" },
                new MovieResponse() { Id = 17, Title = "The Silence of the Lambs", Director = "Jonathan Demme", Rate = "8.7" },
                new MovieResponse() { Id = 18, Title = "Once Upon a Time in the West", Director = "Sergio Leone", Rate = "8.7" },
                new MovieResponse() { Id = 19, Title = "Casablanca", Director = "Michael Curtiz" },
                new MovieResponse() { Id = 20, Title = "The Dark Knight", Director = "Christopher Nolan", Rate = "9.0" },
                new MovieResponse() { Id = 21, Title = "The Godfather= Part II", Director = "Francis Ford Coppola", Rate = "9.0" },
                new MovieResponse() { Id = 22, Title = "12 Angry Men", Director = "Sidney Lumet", Rate = "9.0" },
                new MovieResponse() { Id = 23, Title = "The Lord of the Rings= The Return of the King", Director = "Peter Jackson", Rate = "8.9", },
            };

        public MovieResponse GetMovieById(int id)
        {
            return _movies.FirstOrDefault(item => item.Id == id);
        }

        public void DeleteMovie(MovieResponse movie)
        {
            _movies.Remove(movie);
        }

        public List<MovieResponse> GetMovies()
        {
            return _movies;
        }

    }

    public interface IMoviesService
    {
        List<MovieResponse> GetMovies();
        void DeleteMovie(MovieResponse movie);

        MovieResponse GetMovieById(int id);
    }
}
