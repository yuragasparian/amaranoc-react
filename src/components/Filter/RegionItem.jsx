import React from "react";

function RegionItem({ regionName, isChecked, onChecked, id }) {
  return (
    <div className="flex mt-2">
      <input
        className="cursor-pointer"
        type="checkbox"
        id={regionName}
        checked={isChecked}
        onChange={(e) => onChecked(id, e.target.checked)} // Pass `id` and checked state
      />
      <label htmlFor={regionName} className="ml-3 cursor-pointer">
        {regionName}
      </label>
    </div>
  );
}

export default RegionItem;

