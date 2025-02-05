import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function BookmarkList() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedBookmarks);
  }, []);

  const updateBookmarks = (updatedBookmarks) => {
    setBookmarkedMovies(updatedBookmarks); 
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">📌 Bookmarked Movies</h2>
      {bookmarkedMovies.length === 0 ? (
        <p className="text-center text-gray-400">No bookmarked movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {bookmarkedMovies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isBookmarkedPage={true}
              onBookmarkChange={updateBookmarks} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
