import React, { useEffect, useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovies, deleteMovie } from "../services/movieService";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Movies = ({ user }) => {
  const [movies, setMovies] = useState([]);
  console.log("movies rendering");
  useEffect(() => {
    // to avoid memory leak we have 3 solutions:
    // 1. using isMounted variable
    let isMounted = true;
    (async () => {
      try {
        const { data } = await getMovies();
        if (isMounted) setMovies(data);
      } catch (ex) {
        toast.error(ex);
      }
    })();
    return () => {
      isMounted = false;
    };

    //// 2. to use AbortController
    // let abortController = new AbortController();
    // fetchMovies();
    // return () => {
    //   abortController.abort();
    // };

    //// 3. using use-state-if-mounted npm
    // const [movies, setMovies] = useStateIfMounted([]);
    // fetchMovies();
  }, []);

  //used for option2 and 3 of memory-leak solutions
  // const fetchMovies = async () => {
  //   try {
  //     const { data } = await getMovies();
  //     setMovies(data);
  //   } catch (ex) {
  //     toast.error(ex);
  //   }
  // };

  const headerFields = ["title", "director", "rate", "operation"];

  const handleDelete = useCallback(
    async (id) => {
      const originalMovies = movies.slice();
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
    },
    [movies]
  );

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
          <tr>
            <TableHeader headerFields={headerFields} user={user} />
          </tr>
        </thead>
        <tbody>
          <TableBody movies={movies} user={user} onDelete={handleDelete} />
        </tbody>
      </table>
    </div>
  );
};

export default memo(Movies);
