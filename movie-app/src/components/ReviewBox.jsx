import React, { useState, useEffect } from "react";

export default function ReviewBox({ movie }) {
  const [review, setReview] = useState("");
  const [savedReview, setSavedReview] = useState("");
  const [error, setError] = useState(""); 

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
    setSavedReview(reviews[movie.imdbID] || "");  
  }, [movie.imdbID]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    setError(""); 
  };

  const handleReviewSubmit = () => {
    if (review.trim() === "") {
      setError("Review cannot be empty!"); 
      return;
    }

    const reviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
    reviews[movie.imdbID] = review;
    localStorage.setItem("movieReviews", JSON.stringify(reviews));
    setSavedReview(review); 
    setReview("");  
  };

  return (
    <div className="mt-4 bg-black p-4 rounded-xl shadow-lg border border-gray-700">
      <div className="flex flex-col space-y-4">
        {savedReview && (
          <div className="text-sm text-gray-300">
            <strong>Your Review:</strong> {savedReview}
          </div>
        )}

        {error && (
          <div className="text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="flex items-center space-x-2">
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Leave a review..."
            className="w-full p-2 rounded-lg bg-gray-800 text-white resize-none"
          />
          <button
            onClick={handleReviewSubmit}
            className="p-2 bg-red-600 hover:bg-red-800 text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
