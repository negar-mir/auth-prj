import { toast } from "react-toastify";
import auth from "./authService";
import http from "./http";

export function getMovies() {
  return http.get("movies");
}

export function deleteMovie(id) {
  http
    .delete(`movies/${id}`)
    .then((respose) => respose)
    .catch((error) => {
      const {
        status,
        data: { message },
      } = error;
      if (status === 401) {
        auth.logout();
        window.location = "/login";
      } else {
        toast.error(message);
      }
    });
}
