"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Nos Burgers <span className="text-orange-500">Populaires</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard
            title="Le Colossal"
            image="/images/colossal.png"
            reviews="12"
            price="9.00€"
            description="4 steaks, cheddar, oignons caramélisés, salade et cornichons."
          />
          <BurgerCard
            title="Le Classique"
            image="/images/classique.png"
            reviews="8"
            price="8.00€"
            description="steak, cheddar, salade, cornichons et notre fameuse sauce signature."
          />
          <BurgerCard
            title="Le Montagnard"
            image="/images/montagnard.png"
            reviews="15"
            price="9.50€"
            description="2 steaks, bacon, raclette fondante, salade et cornichons frais."
          />
          <BurgerCard
            title="Le Chick-BB"
            image="/images/chickbb.png"
            reviews="10"
            price="9.00€"
            description="Steak, tenders, boursin, oignons, frites croustillantes, salade et cornichons."
          />
          <BurgerCard
            title="Le Berger Sucré"
            image="/images/bergersucre.png"
            reviews="14"
            price="10.00€"
            description="2 steaks, chèvre, miel, noix, oignons confits et salade."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
