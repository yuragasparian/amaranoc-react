import React from "react";
import CardCarousel from "./CardCarousel";

function CardItem({ offer }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden">
      <CardCarousel images={offer.images} />

      <div className="card-body">
        <div className="flex justify-between">
          <p>{offer.address}</p>
          <p>{offer.maxPeopleCount}</p>
          <div className="w-10 bg-[#FD993A] text-white">{offer.rating}</div>
        </div>
        <div>
            <h1>
                {offer.price}$
            </h1>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
