import React from "react";
import { FaMinusCircle } from "react-icons/fa";  
import BookmarkButton from "./BookmarkButton";
import WatchedButton from "./WatchedButton";
import ReviewBox from "./ReviewBox";

export default function MovieCard({ movie, isBookmarkedPage, onBookmarkChange }) {

  
  const removeBookmark = () => {
    const updatedBookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]")
      .filter((m) => m.imdbID !== movie.imdbID);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmarks));
    onBookmarkChange(updatedBookmarks); 

        const reviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
        delete reviews[movie.imdbID];  
        localStorage.setItem("movieReviews", JSON.stringify(reviews));
  };

  return (
    <div className="bg-black p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-gray-700 relative">
      {isBookmarkedPage && (
        <button
          onClick={removeBookmark}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-800 text-white p-2 rounded-full"
        >
          <FaMinusCircle className="text-white text-xl" />
        </button>
      )}

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md"
        onError={(e) => {
          e.target.src = "https://www.indieactivity.com/wp-content/uploads/2022/03/File-Not-Found-Poster.png";
        }}
      />
      <h3 className="text-lg font-bold text-red-500 mt-3">{movie.Title}</h3>
      <p className="text-sm text-gray-400">{movie.Year}</p>

      <div className="mt-3 space-y-4">
        {!isBookmarkedPage && (
          <div className="flex space-x-4">
            <BookmarkButton movie={movie} onBookmarkChange={onBookmarkChange} />
          </div>
        )}

        {isBookmarkedPage && (
          <div className="flex justify-between items-center space-x-4 mt-4">
            <div className="flex flex-col w-full space-y-3">
              <ReviewBox movie={movie} />
              <WatchedButton movie={movie} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
