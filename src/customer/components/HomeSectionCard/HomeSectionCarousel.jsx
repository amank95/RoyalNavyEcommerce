import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
 import { Button } from "@mui/material";
 import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import {mens_kurta} from '../../../Data/mens_kurta';

const HomeSectionCarousel = ( ) => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const slidePrev = () => setActiveIndex(activeIndex-1);
  const slideNext = () => setActiveIndex(activeIndex+1)

  const syncActiveIndex = ({ item }) => setActiveIndex(item)

  const items = mens_kurta.slice(0,14).map((item) => (
      <HomeSectionCard product={item} />
  ));

  // const slideInFromRight = (t) => {
  //   return `translateX(${100 - t * 100}%)`;
  // };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 mt-14 mb-12 ">
      {/* <h2 className="text-2xl font-extrabold text-gray-900 py-5"></h2> */}
       {/* Header section Add by me */}
       <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our top-selling products, handpicked just for you.
          </p>
        </div>

        {/* AliceCarousel Card */}
      <div className="relative border p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
           activeIndex={activeIndex}
           responsive={responsive}
           onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />

        {activeIndex !== items.length-5 && 
          (<Button
            onClick={slideNext}
            variant="contained"
            className="z-50  bg-orange-500 hover:bg-orange-600 text-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )} 

        {activeIndex !== 0 &&  (<Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-orange-500 hover:bg-orange-500 text-white"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: " rotate(90deg)" }}
            />
          </Button>
         )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
