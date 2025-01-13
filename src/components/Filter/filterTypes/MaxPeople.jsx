import React from "react";
import { useSearchParams } from "react-router";

function MaxPeople() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCount = searchParams.get("permissible_people_number");

  const handleAdd = () => {
    searchParams.set("permissible_people_number", +activeCount+1);
    setSearchParams(searchParams);
  }
  const handleSubstract = () => {
    +activeCount>1 ? searchParams.set("permissible_people_number", +activeCount-1):false;
    
    setSearchParams(searchParams);
  }

  return (
    <div>
      <p className="py-1 pb-3 font-bold">Max people count</p>

      <div className="flex w-3/4 gap-3 items-center">
        <button className="btn btn-circle w-10 h-10" onClick={handleSubstract}>-</button>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs "
          value={activeCount || ""}
          min={1}
        />
        <button className="btn btn-circle w-10 h-10" onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default MaxPeople;
