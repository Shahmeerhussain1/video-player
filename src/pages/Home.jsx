import { useState } from "react";
import { movies } from "../movies";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");

  // Filter movies by title (case-insensitive)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-b from-gray-900/90 to-transparent">
        <h1 className="text-3xl font-extrabold text-red-600">🎬 Movies For </h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none w-full sm:w-72"
        />
      </header>

      {/* Movie Grid */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {search ? `🔍 Results for "${search}"` : "🔥 New Releases"}
        </h2>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">No movies found.</p>
        )}
      </main>
    </div>
  );
}

export default Home;
