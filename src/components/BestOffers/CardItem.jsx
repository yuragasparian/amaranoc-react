import React from "react";
import CardCarousel from "./CardCarousel";
import  Star  from "../../assets/icons/star.svg";

function CardItem({ offer }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden">
      <CardCarousel images={offer.images} />

      <div className="card-body">
        <div className="flex justify-between items-center h-8">
          <p className="font-bold text-base">
            {offer.address[0].toUpperCase() + offer.address.slice(1)}
          </p>
          <p className="text-base">{offer.maxPeopleCount}</p>
          <div className="flex justify-center w-12 rounded py-[1px] bg-[#FD993A] text-white gap-1">
            <img src={Star} alt=""  />
            <span className="text-lg">{offer.rating}</span>
          </div>
        </div>
        <div>
          <h1>{offer.price}$</h1>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
