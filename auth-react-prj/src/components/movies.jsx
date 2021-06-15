import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovies, deleteMovie } from "../services/movieService";

const Movies = ({ user }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const { data } = await getMovies();
      setMovies(data);
    } catch (ex) {
      toast.error(ex);
    }
  };

  const renderTableHeader = () => {
    let headerElement = ["#", "title", "director", "rate", "operation"];

    return headerElement.map((key, index) => {
      return (key === "operation" && user) || key !== "operation" ? (
        <th scope="col" key={index}>
          {key.toUpperCase()}
        </th>
      ) : null;
    });
  };

  const renderBody = () => {
    return (
      movies &&
      movies.map(({ id, title, director, rate }, index) => {
        return (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{director}</td>
            <td>{rate}</td>
            {user && (
              <td>
                <button className="button" onClick={() => removeMovie(id)}>
                  Delete
                </button>
              </td>
            )}
          </tr>
        );
      })
    );
  };

  const removeMovie = async (id) => {
    const originalMovies = movies;
    const items = originalMovies.filter((movie) => movie.id !== id);
    setMovies(items);
    try {
      await deleteMovie(id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This movies has already been deleted");
      }
      setMovies(originalMovies);
    }
  };

  return (
    <div className="col-12">
      <div className="d-flex justify-content-between">
        <div>
          <h1>Movies</h1>
        </div>
        {user && (
          <div className="align-self-center">
            <Link to="/logout" className="link">
              Logout
            </Link>
          </div>
        )}
      </div>
      {!user && (
        <p className="alert alert-danger my-3">
          Please{" "}
          <Link to="/login" className="link">
            login
          </Link>{" "}
          to see the delete button!
        </p>
      )}
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Movies;
