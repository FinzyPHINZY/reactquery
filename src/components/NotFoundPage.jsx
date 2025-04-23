import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-240">
        <h1 className="text-center text-7xl mb-4">Not Found Page ❌</h1>
        <Link to="/">
          <button
            type="button"
            className="border border-gray-400 p-2 font-bold cursor-pointer shadow-lg shadow-gray-700"
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
