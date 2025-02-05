import React, { useState, useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function BookmarkButton({ movie, onBookmarkChange }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setIsBookmarked(bookmarks.some((bm) => bm.imdbID === movie.imdbID));
  }, [movie]);

  const handleBookmarkToggle = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter((bm) => bm.imdbID !== movie.imdbID);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmarks));
    } else {
      bookmarks.push(movie);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarks));
    }

    setIsBookmarked(!isBookmarked);
    onBookmarkChange();
  };

  return (
    <button
      onClick={handleBookmarkToggle}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md bg-black border border-gray-700 hover:border-red-500 text-white transition-all`}
    >
      {isBookmarked ? <FaBookmark className="text-red-500" /> : <FaRegBookmark />}
      <span className="text-sm">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
}
