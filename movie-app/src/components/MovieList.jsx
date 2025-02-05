import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import BookmarkList from "./BookmarkList"; 

export default function MovieList({ searchQuery, isBookmarkedPage }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://movie-database-alternative.p.rapidapi.com/?s=${searchQuery}&page=${currentPage}&r=json`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "ffb9b44c14msh1475be4c2df5aa4p18de00jsn212244308685",
              "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10)); 
        } else {
          setError("No movies found.");
        }
      } catch (err) {
        setError("Error fetching movies.");
      }

      setLoading(false);
    };

    fetchMovies();
  }, [searchQuery, currentPage]);

  return (
    <div className="mt-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
    
    </div>
  );
}
