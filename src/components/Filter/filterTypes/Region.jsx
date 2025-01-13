import React, { useMemo } from "react";
import RegionItem from "../RegionItem";
import { useSearchParams } from "react-router";
import { regions } from "../../../data/Regions";

function Region() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeRegions = useMemo(() => searchParams.getAll("region_id"), [searchParams]);

  const onChecked = (id, isChecked) => {
    let updatedRegions = new Set(activeRegions);

    if (isChecked) {
      updatedRegions.add(id.toString());
    } else {
      updatedRegions.delete(id.toString());
    }

    // Convert the Set back to an array
    const updatedRegionsArray = Array.from(updatedRegions);

    // Only update the search params if there are changes
    if (updatedRegionsArray.join(",") !== activeRegions.join(",")) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("region_id"); // Clear existing "region_id" params

      updatedRegionsArray.forEach((region) => newSearchParams.append("region_id", region));

      // Update the search params using `setSearchParams`
      setSearchParams(newSearchParams);
    }
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
            onChecked={(isChecked) => onChecked(region.id, isChecked)}
          />
        ))}
      </div>
    </div>
  );
}

export default Region;
