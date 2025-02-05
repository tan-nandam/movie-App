import React from "react";
import SearchBox from "./SearchBox";

export default function LandingPage({ setSearchQuery }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4">
        🎬 Movie Explorer
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Discover movies, bookmark favorites, and leave reviews!
      </p>

      <div className="w-full max-w-md">
        <SearchBox setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}
