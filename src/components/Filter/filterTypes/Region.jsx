import React from "react";
import { regions } from "../Regions";
import RegionItem from "../RegionItem";
import { useSearchParams } from "react-router";

function Region() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeRegions = searchParams.getAll("region_id");

  const onChecked = (id, isChecked) => {
    // Clone the search params
    const newSearchParams = new URLSearchParams(searchParams);

    if (isChecked) {
      // Add region_id if checked
      newSearchParams.append("region_id", id);
    } else {
      // Remove region_id if unchecked
      const updatedRegions = newSearchParams.getAll("region_id").filter((region) => region !== id.toString());
      newSearchParams.delete("region_id");
      updatedRegions.forEach((region) => newSearchParams.append("region_id", region));
    }

    // Update the URL search parameters
    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <p className="py-1 pb-3 font-bold">Region</p>

      <div className="h-40 overflow-y-scroll py-4">
        {regions.map((region) => (
          <RegionItem
            key={region.id}
            regionName={region.name}
            id={region.id}
            isChecked={activeRegions.includes(region.id.toString())}
            onChecked={onChecked}
          />
        ))}
      </div>
    </div>
  );
}

export default Region;
