import { useParams } from "react-router-dom";
import { movies } from "../movies";
import MoviePlayer from "../components/MoviePlayer";

function Player() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-red-500 text-2xl">
        ❌ Movie not found
      </div>
    );
  }

  return <MoviePlayer videoUrl={movie.video} title={movie.title} />;
}

export default Player;
