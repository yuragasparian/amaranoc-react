import React from "react";
import Region from "./filterTypes/Region";
import Price from './filterTypes/Price';
import MaxPeople from './filterTypes/MaxPeople';

function Filter() {
  return (
    <div className="border rounded-2xl p-5 row-span-full">
      <Region />
      <hr className="my-5" />
      <Price />
      <hr className="my-5" />
      <MaxPeople />
    </div>
  );
}

export default Filter;
