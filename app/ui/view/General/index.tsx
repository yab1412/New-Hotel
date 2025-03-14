"use client";
import React from "react";
import styles from "./index.module.scss";
import { Icons } from "../../components/Icons";

const items = [
  {
    title: "Experience Luxury & Comfort",
    description:
      "Immerse yourself in the allure of elegance at our luxurious hotel. Each suite is meticulously designed to provide unparalleled comfort and style, ensuring your stay is as relaxing as it is memorable.",
    image: "/image.jpg",
    button: "Book Your Stay.",
  },
  {
    title: "Top-Notch Amenities Await",
    description:
      "Indulge in a variety of premium amenities including a breathtaking rooftop pool, rejuvenating spa treatments, and exquisite dining experiences that will elevate your stay to a new level of luxury.",
    image: "/image.jpg",
    button: "Discover Our Amenities.",
  },
  {
    title: "Unique Rooms for Every Taste",
    description:
      "Explore our thoughtfully curated rooms that blend comfort with chic design. Each space is crafted to ensure you have an unforgettable experience whether you’re seeking a romantic getaway or a family vacation.",
    image: "/image.jpg",
    button: "View Our Rooms & Suites.",
  },
];

export const General = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.main}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <div className={styles.content}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className={styles.button}> 
                {item.button}
                <Icons.UpRight size={30} color="#2e8b92"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
