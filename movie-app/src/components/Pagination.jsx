import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; 

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-3 mt-8 text-white">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 rounded-full border-2 border-transparent transition-all duration-300 ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "bg-black text-white border-red-500 hover:bg-red-600 hover:border-none hover:text-white"
        }`}
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`px-4 py-2 rounded-lg text-lg font-bold transition-all duration-300 ${
            page === currentPage
              ? "bg-red-600 text-white"
              : "bg-black text-gray-300 hover:bg-red-700 hover:text-white"
          } ${page === "..." ? "cursor-default opacity-50" : ""}`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-full border-2 border-transparent transition-all duration-300 ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "bg-black text-white border-red-500 hover:bg-red-600 hover:border-none hover:text-white"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
