"use client";

import React, { useState, useEffect, useRef } from "react";
import style from "./index.module.scss";
import { Icons } from "../Icons";
// import { Icons } from "../Icons";

interface SliderProps<T> {
  items: { [key: string | number]: T };
  interval?: number;
  className?: string;
  renderItem: (item: T) => React.ReactNode;
}

export const Slider = <T,>({
  items,
  interval = 5000,
  className = "",
  renderItem,
}: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [runInterval, setRunInterval] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const itemsLength = Object.keys(items).length;

  useEffect(() => {
    if (runInterval) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) =>
          prev < Object.keys(items).length ? prev + 1 : 1
        );
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [runInterval, interval, items]);

  const clear = () => {
    setRunInterval(false);
  };

  const getPosition = (index: number) => {
    const itemsLength = Object.keys(items).length;
    const prev = activeIndex - 1 === 0 ? itemsLength : activeIndex - 1;
    const next = activeIndex === itemsLength ? 1 : activeIndex + 1;

    if (index + 1 === prev) return style.prevSlide;
    if (index + 1 === activeIndex) return style.activeSlide;
    if (index + 1 === next) return style.nextSlide;
    return style.otherSlide;
  };

  const handlePrev = () => {
    const itemsLength = Object.keys(items).length;
    clear();
    setActiveIndex(activeIndex > 1 ? activeIndex - 1 : itemsLength);
  };

  const handleNext = () => {
    const itemsLength = Object.keys(items).length;
    clear();
    setActiveIndex(activeIndex < itemsLength ? activeIndex + 1 : 1);
  };

  return (
    <div className={`${style.slider} ${className}`}>
      <div className={style.sliderContainer}>
        {Object.entries(items).map(([key, item], index) => (
          <div
            key={key}
            className={`${style.sliderItem} ${getPosition(index)}`}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      <div className={style.sliderButtons}>
        <button className={style.left} onClick={handlePrev}><Icons.LeftArrow size={30} /></button>
        <button className={style.right} onClick={handleNext}><Icons.RightArrow size={30} /></button>
      </div>
      <div className={`${style.sliderCounter}`}>
        <span>
          <span className={style.activeIndex}>{activeIndex}</span> / {itemsLength}
        </span>
      </div>
    </div>
  );
};
