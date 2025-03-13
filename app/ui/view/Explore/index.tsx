"use client";

import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Gutter } from "../../components/Gutter";
import { Slider } from "../Slider";
import { Icons } from "../../components/Icons";
import Image from "next/image";


export const Explore = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      image: "/image.jpg",
      title: "Rejuvenating Spa Services",
    },
    {
      image: "/image.jpg",
      title: "Fine Dining Experience",
    },
    {
      image: "/image.jpg",
      title: "Spectacular Rooftop Pool",
    },
    {
      image: "/image.jpg",
      title: "Stunning Ocean Views",
    },
    {
      image: "/image.jpg",
      title: "State of the Art Gym",
    },
  ];


  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCurrentSlide((prev) => {
    //     if (prev === services.length - 1) {
    //       setTimeout(() => {
    //         setCurrentSlide(0);
    //       }, 500);
    //       return prev + 1;
    //     }
    //     return (prev + 1) % services.length;
    //   });
    // }, 3000);

    return () => clearInterval(0);
  });

  const handleSlideChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentSlide((prev) => {
        if (prev === 0) {
          return services.length - 1;
        }
        return prev - 1;
      });
    } else {
      setCurrentSlide((prev) => {
        if (prev === services.length - 1) {
          setTimeout(() => {
            setCurrentSlide(0);
          }, 500);
          return prev + 1;
        }
        return (prev + 1) % services.length;
      });
    }
  };

  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.head}>
          <div className={style.title}>
          <h2>Explore Our Offerings</h2>
          <h1>Exquisite Amenities Await </h1>
          </div>
          <button>
            Discover More <Icons.UpRight size={20} />
          </button>
        </div>
        <div className={style.slider}>
          <div className={style.SliderContent}>
           
            <div className={style.slideContainer}>
              <div
                className={style.slideTrack}
                style={{
                  transform: `translateX(-${currentSlide * 100}px)`,
                  transition:
                    currentSlide === services.length
                      ? "none"
                      : "transform 0.2s ease",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={style.slideItem}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={400}
                    />
                    <h1>{service.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={style.sliderButtons}>
          <button
              className={style.left}
              onClick={() => handleSlideChange("prev")}
            >
                <Icons.LeftArrow size={20} />
            </button>
            <button
              className={style.right}
              onClick={() => handleSlideChange("next")}
            >
              <Icons.RightArrow size={20}/>
            </button>
          </div>
        </div>
          <div className={style.disc}>
            <p>
              Experience unmatched hospitality and luxury at New Hotel. Our
              exclusive offerings are designed to enhance your stay, allowing
              you to unwind and indulge in comfort, elegance, and world-class
              service.
            </p>
          </div>
      </div>
    </Gutter>
  );
};
