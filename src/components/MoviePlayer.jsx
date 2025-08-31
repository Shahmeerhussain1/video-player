function MoviePlayer({ videoUrl, title }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">{title}</h1>
      <div className="w-full max-w-5xl">
        {/* <video
          src={videoUrl}
          controls
          className="rounded-2xl shadow-2xl w-full"
        /> */}
        <iframe
          src={videoUrl}
          width="100%"
          height="500"
          allow="autoplay"
          className="rounded-lg shadow-lg"
        />

      </div>
      {/* <a
        href={videoUrl}
        download
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
      >
        ⬇ Download Movie
      </a> */}
    </div>
  );
}

export default MoviePlayer;
