import React, { useState, useEffect } from "react";

export default function WatchedButton({ movie }) {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    setIsWatched(watchedMovies.some((wm) => wm.imdbID === movie.imdbID));
  }, [movie]);

  const handleWatchedToggle = () => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];

    if (isWatched) {
      const updatedWatchedMovies = watchedMovies.filter((wm) => wm.imdbID !== movie.imdbID);
      localStorage.setItem("watchedMovies", JSON.stringify(updatedWatchedMovies));
    } else {
      watchedMovies.push(movie);
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    }

    setIsWatched(!isWatched);
  };

  return (
    <button
      onClick={handleWatchedToggle}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isWatched ? "bg-green-500" : "bg-gray-600"} hover:bg-gray-700`}
    >
      <span>{isWatched ? "Watched" : "Mark as Watched"}</span>
      <i className={`fa ${isWatched ? "fa-eye" : "fa-eye-slash"} text-white`}></i>
    </button>
  );
}
