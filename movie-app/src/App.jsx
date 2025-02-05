import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MovieList from "./components/MovieList";
import BookmarkList from "./components/BookmarkList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isBookmarkedPage, setIsBookmarkedPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setIsBookmarkedPage(false); 
  };

  const handleBookmarkPageToggle = () => {
    setIsBookmarkedPage((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <header
        className={`flex justify-between items-center p-4 fixed w-full top-0 z-10 transition-all ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex space-x-6">
          <button
            onClick={() => {
              setSearchQuery("");
              setIsBookmarkedPage(false); 
            }}
            className={`flex items-center border-2 border-transparent px-4 py-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-red-600 hover:text-red-500 hover:border-red-600"
                : "text-white hover:border-red-600 hover:text-red-600"
            }`}
          >
            <i className="fa fa-search mr-2"></i>Back to Search
          </button>
          <button
            onClick={handleBookmarkPageToggle}
            className={`flex items-center border-2 border-transparent px-4 py-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-red-600 hover:text-red-500 hover:border-red-600"
                : "text-white hover:border-red-600 hover:text-red-600"
            }`}
          >
            <i className="fa fa-bookmark mr-2"></i>
            {isBookmarkedPage ? "Back to Movies" : "Go to Bookmarks"}
          </button>
        </div>
      </header>
      <div className="pt-20">
        {!searchQuery && !isBookmarkedPage ? (
          <LandingPage setSearchQuery={handleSearchQueryChange} />
        ) : (
          <div>
            {!isBookmarkedPage && (
              <MovieList searchQuery={searchQuery} isBookmarkedPage={isBookmarkedPage} />
            )}
            {isBookmarkedPage && <BookmarkList />}
          </div>
        )}
      </div>
    </div>
  );
}
