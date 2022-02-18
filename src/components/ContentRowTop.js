import ContentRowMovies from "./ContentRowMovies";
import GenresDB from "./GenresDB";
const ContentRowTop = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <ContentRowMovies />
      </div>
    </main>
  );
};

export default ContentRowTop;
