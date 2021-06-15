using CoreAuthPrj.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAuthPrj.Controllers
{

    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesService _movieService;

        public MoviesController(IMoviesService movieService)
        {
            this._movieService = movieService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var list = _movieService.GetMovies();
            return Ok(list);
        }

        [Authorize]
        [HttpDelete("{id}")]
        //[AutoValidateAntiforgeryToken]
        public IActionResult Delete(int id)
        {
            var movie = _movieService.GetMovieById(id);
            if (movie == null)
                return NotFound(new { message= "The movie does not exist or already deleted!" });

            _movieService.DeleteMovie(movie);

            return Ok();

        }
    }
}
