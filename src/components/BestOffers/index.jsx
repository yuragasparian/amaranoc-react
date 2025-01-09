import React from "react";
import { useSearchParams } from "react-router";
import { offers } from "./../../data/database";
import CardItem from "./CardItem";

function BestOffers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");
  const regionIds = searchParams.getAll("region_id");

  let filtered = offers.filter(offer => offer.category.toLocaleLowerCase().replace(" ", "_")==section)
  if (filtered.length==0) {filtered=offers}
  

  return (
    <>
    <h2 className=" text-lg font-bold">Best offers</h2>
    <div className="grid grid-cols-3 gap-6">
      {filtered.map((offer) => (
        <CardItem offer={offer} key={offer.id}/>
      ))}
    </div>
    </>
  );
}

export default BestOffers;
