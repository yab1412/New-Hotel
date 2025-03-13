"use client";

import React, { useState, useEffect, useRef } from "react";
import style from "./index.module.scss";
// import { Icons } from "../../components/Icons";

export const Slider = () => {
  const images = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"];

  const [activeIndex, setActiveIndex] = useState(1);
  const [runInterval, setRunInterval] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (runInterval) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev < images.length ? prev + 1 : 1));
      }, 50000);
    }

    return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
  }, [runInterval, images.length]);

  const clear = () => {
    setRunInterval(false);
  };

  const getPosition = (index: number) => {
    const prev = activeIndex - 1 === 0 ? images.length : activeIndex - 1;
    const next = activeIndex === images.length ? 1 : activeIndex + 1;

    if (index + 1 === prev) return style.prevSlide;
    if (index + 1 === activeIndex) return style.activeSlide;
    if (index + 1 === next) return style.nextSlide;
    return style.otherSlide;
  };

   const handlePrev = () => {
     const itemsLength = Object.keys(images).length;
     clear();
     setActiveIndex(activeIndex > 1 ? activeIndex - 1 : itemsLength);
   };

   const handleNext = () => {
     const itemsLength = Object.keys(images).length;
     clear();
     setActiveIndex(activeIndex < itemsLength ? activeIndex + 1 : 1);
   };

  return (
    <div className={style.slider}>
      <div className={style.sliderContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${style.sliderItem} ${getPosition(index)}`}
          >
            <h1>{image}</h1>
          </div>
        ))}
      </div>
      {/* <div
        className={style.sliderButtons}
        onClick={() => {
          clear();
          setActiveIndex(activeIndex < images.length ? activeIndex + 1 : 1);
        }}
      >
        <Icons.LeftArrow size={50} />
      </div> */}
      <div className={style.sliderButtons}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
