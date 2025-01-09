import React, { useState } from "react";
import { useSearchParams } from "react-router";

function Price() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCurrency = searchParams.get("currency") || "AMD";

  const [minPrice, setMinPrice] = useState(searchParams.get("min_price") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max_price") || "");

  const CircleButton = ({ curr, children }) => {
    const handleClick = () => {
      searchParams.set("currency", curr);
      setSearchParams(searchParams);
    };

    const isActive = activeCurrency === curr;
    const buttonClasses = `btn btn-circle btn-outline w-8 h-8 text-base ${
      isActive ? "bg-black text-white" : "bg-white text-black"
    }`;

    return (
      <button onClick={handleClick} className={buttonClasses}>
        {children}
      </button>
    );
  };

  const handlePriceChange = (key, value) => {
    const updatedValue = value.trim();
    if (key === "min_price") {
      setMinPrice(updatedValue);
    } else {
      setMaxPrice(updatedValue);
    }

    if (updatedValue) {
      searchParams.set(key, updatedValue);
    } else {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="py-1 pb-3 font-bold">Price</p>
        <div className="flex gap-1">
          <CircleButton curr="AMD">֏</CircleButton>
          <CircleButton curr="USD">$</CircleButton>
          <CircleButton curr="EUR">€</CircleButton>
          <CircleButton curr="RUB">₽</CircleButton>
        </div>
      </div>
      <div className="flex gap-3 items-center my-4">
        <input
          type="number"
          value={minPrice}
          placeholder="From"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handlePriceChange("min_price", e.target.value)}
        />
        <span>-</span>
        <input
          type="number"
          value={maxPrice}
          placeholder="To"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handlePriceChange("max_price", e.target.value)}
        />
      </div>
    </div>
  );
}

export default Price;

