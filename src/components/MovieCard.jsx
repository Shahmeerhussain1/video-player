import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/player/${movie.id}`} className="group relative block">
      <img
        src={movie.banner}
        alt={movie.title}
        className="rounded-xl w-full h-72 object-cover shadow-md transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
        <h3 className="text-white font-semibold text-lg group-hover:text-red-400 transition">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
}

export default MovieCard;
