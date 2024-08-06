"use client";
import { useState } from "react";
import NewsFeeds from "../newsFeeds/NewsFeeds";
function Categories() {
  const categories = [
    "All",
    "Car News",
    "Car Reviews",
    "Top Pick's",
    "Offers",
    "New",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const CategoryButton = ({ category, isSelected, onClick }) => (
    <button
      className={`px-6 py-2  text-sm sm:text-base rounded-full mx-2 my-1 sm:my-0 transition-all ${
        isSelected ? "bg-black text-white" : "bg-blue-50  hover:bg-blue-200"
      }`}
      onClick={onClick}
    >
      {category}
    </button>
  );
  return (
    <>
      <div className="text-2xl sm:text-3xl text-lightgray">Categories</div>

      <div className="flex flex-wrap items-center">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      <NewsFeeds />
    </>
  );
}

export default Categories;
