import React from "react";
import { useSearchParams } from "react-router";
import { offers } from "./../../data/database";
import CardItem from "./CardItem";

function BestOffers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");
  const regionIds = searchParams.getAll("region_id");

  return (
    <div className="grid grid-cols-3 gap-6">
      {offers.map((offer) => (
        <CardItem offer={offer} key={offer.id}/>
      ))}
    </div>
  );
}

export default BestOffers;
