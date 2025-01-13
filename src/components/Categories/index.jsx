import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sections } from "../../data/SectionNames";
import CategoryItem from "./CategoryItem";

function Categories() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 9, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
      slidesToSlide: 7, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
  };

  return (
    <div >
      <hr className="border-slate-100"/>
      <Carousel className="my-3" responsive={responsive} swipeable={true} draggable={true}>
        {sections.map((section) => (
          <CategoryItem key={section.id} item={section} />
        ))}
      </Carousel>
      <hr className="border-slate-100"/>
    </div>
  );
}

export default Categories;
