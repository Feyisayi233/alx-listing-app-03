import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/globe.svg" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-800">ListingApp</span>
      </div>
      <div className="flex-1 flex justify-center my-2 md:my-0">
        <input
          type="text"
          placeholder="Search for properties..."
          className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-blue-600 font-semibold hover:underline">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Sign Up
        </button>
      </div>
      <div className="w-full flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-6 justify-center md:justify-end">
        {[
          "Rooms",
          "Mansion",
          "Countryside",
          "Villa",
          "Apartment",
          "Cabin",
          "Penthouse",
        ].map((type) => (
          <span
            key={type}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 cursor-pointer hover:bg-blue-100"
          >
            {type}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
