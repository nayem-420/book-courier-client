import React from 'react';

const LatestBook = () => {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Latest Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {book.description?.slice(0, 60)}...
                </p>
                <Link
                  to={`/books/${book._id}`}
                  className="text-[#FF6B35] font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default LatestBook;