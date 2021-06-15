let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rate: "9.3",
  },
  {
    id: 2,
    title: "The Godfather ",
    director: "Francis Ford Coppola",
    rate: "9.2",
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    rate: "9.0",
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    rate: "9.0",
  },
  { id: 5, title: "12 Angry Men", director: "Sidney Lumet", rate: "9.0" },
  {
    id: 6,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    rate: "8.9",
  },
];

export function getMovies() {
  const response = {
    statusCode: 200,
    data: movies,
  };
  return response;
}

export function deleteMovie(id) {
  const index = movies.findIndex((item) => item.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
    return true;
  }

  return false;
}
