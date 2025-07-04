import React from "react";
import { useApp } from "../context/AppContext";

const PaginationControls = () => {
  const { setPage, page, totalPages } = useApp();

  return (
    <>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-1">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-btn dark:bg-green-400 text-black rounded disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-green-500 dark:bg-green-700"
                : "bg-btn dark:bg-green-400"
            } text-black`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-btn dark:bg-green-400 text-black rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PaginationControls;
