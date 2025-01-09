import React from "react";
import { useSearchParams } from "react-router";

function CategoryItem({ item }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Check if the current section matches the item's path
  const isActive = searchParams.get("section") === item.path;

  const handleClick = () => {
    // Update or add the `section` parameter in the query
    searchParams.set("section", item.path);
    setSearchParams(searchParams); // Update the URL
  };

  return (
    <button
      onClick={handleClick}
      className={
        isActive
          ? "flex flex-col justify-center items-center group text-orange-500"
          : "flex flex-col justify-center items-center group"
      }
    >
      <div className="flex flex-col justify-center items-center">
        <img src={`sections/${item.path}.svg`} alt="" />
        <p className="text-sm mt-1">{item.name}</p>
        <div
          className={`mt-2 h-[2px] transition-all duration-100 ${
            isActive ? "w-8 bg-orange-400" : "w-0 bg-transparent group-hover:w-8"
          }`}
        ></div>
      </div>
    </button>
  );
}

export default CategoryItem;

