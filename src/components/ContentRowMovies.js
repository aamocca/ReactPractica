import LastMovieDB from "./LastMovieDB";
import MoviesDataBase from "./MoviesDataBase";

let ContentRowMovies = () => {
  return (
    <main>
      <MoviesDataBase />
      <LastMovieDB />
      <GenresDB />
    </main>
  );
};
export default ContentRowMovies;
