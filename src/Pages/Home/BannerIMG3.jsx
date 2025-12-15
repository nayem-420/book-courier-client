import React from "react";
import banner3 from "../../assets/banner-3.jpg";
import { Link } from "react-router";

const BannerIMG3 = () => {
  return (
    <div
      className="h-[70vh] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${banner3})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD580] bg-clip-text text-transparent drop-shadow-lg">
          Discover Your Next Favorite Book
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-6">
          Explore thousands of books with BookCourier, delivered fast and easy.
        </p>

        <Link to="/all-books">
          <button className="bg-[#FF6B35] hover:bg-[#e85a28] text-white px-6 py-3 rounded-lg font-semibold transition">
            Explore All Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerIMG3;
