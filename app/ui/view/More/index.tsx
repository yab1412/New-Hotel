"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";
import { Gutter } from "../../components/Gutter";
import Image from "next/image";
import { Slider } from "../../components/Slider";
import ImageShowcase from "./showCase/show";

const about = [
  "Luxury Accommodations",
  "Gourmet Dining",
  "Unmatched Spa Service",
  "Stunning Ocean Views",
  "Rooftop Pool",
];

const cardData = {
  1: {
    title: "Immerse Yourself in Unparalleled Luxury",
    description:
      "Discover the essence of luxury with our beautifully designed spaces, fine dining options, and exceptional service that caters to your every need. We are dedicated to providing an unforgettable experience, tailored to make your stay with us truly special.",
    image: "/publicContain.jpg",
    button: "Book Your Experience",
  },
  2: {
    title: "Elevate Your Stay with Exquisite Amenities",
    description:
      "From rejuvenating spa services to stunning ocean views, our hotel is designed to provide you with a perfect blend of relaxation and indulgence. Experience the finest hospitality that ensures your comfort throughout your stay.",
    image: "/publicContain.jpg",
    button: "Check Availability",
  },
};

export const More = () => {

  return (
    <Gutter className={styles.container}>
      <div className={styles.image}>
        <Image src={"/Bubble.png"} alt="" width={200} height={150} />
      </div>
      <div className={styles.main}>
        {about.map((item, index) => (
          <div key={index} className={styles.item}>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.slider}>
          <Slider
            items={cardData}
            interval={3000}
            renderItem={(item) => (
              <div className={styles.slider}>
                <div className={styles.text}>
                  <img src={item.image} alt="" width={300} height={500} />
                  <div className={styles.items}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button>{item.button}</button>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className={styles.showcase}>
          <h2>
            Redefine Your Travel Experience with <span>New Hotel</span>.
          </h2>
          <div className={styles.star}>
          <Image src={'/stars.jpg'} alt="" width={50} height={50}/>
          <p>
            Our commitment to excellence ensures that every moment spent at New
            Hotel is exceptional. Experience our luxurious amenities and
            unparalleled service, designed to elevate your stay and create
            lasting memories.
          </p>
          </div>
          <ImageShowcase />
        </div>
      </div>
    </Gutter>
  );
};
