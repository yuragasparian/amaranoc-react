import React from "react";
import Header from "./../components/Header";
import Categories from "../components/Categories";
import Filter from './../components/Filter/index';
import SideFilter from './../components/SideFilter/index';
import BestOffers from './../components/BestOffers/index';

function Home() {
  return (
    <>
      <Header />
      <div className="mt-6 grid grid-cols-4 mx-16 gap-8 grid-rows-4"> 
        <Filter />
        <div className="col-span-3 mx-5 flex flex-col gap-10">
        <SideFilter />
        <Categories />
        <BestOffers />
        </div>
      </div>
    </>
  );
}

export default Home;
