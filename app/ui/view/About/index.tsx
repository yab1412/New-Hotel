"use client";

import Image from "next/image";
import React from "react";
import { Gutter } from "../../components/Gutter";
import styles from "./index.module.scss";
import { Slider } from "../../components/Slider";
import { Icons } from "../../components/Icons";

const cardData = {
  1: {
    title1: "Stunning Views",
    description1:
      "Breathtaking Ocean Views Immerse yourself in the tranquil beauty of the ocean right from your room.",
    image1: "/publicContain.jpg",
    title2: "Elegant Accommodations",
    description2: "Luxurious Guest Rooms Relax in our beautifully designed rooms that offer a serene escape.",
    image2: "/publicContain.jpg",
    general:
      "Experience a perfect blend of luxury, comfort, and style in every aspect of your stay.",
  },
  2: {
    title1: "Exquisite Dining",
    description1:
      "Fine Dining Experience Savor culinary masterpieces crafted by world-class chefs.",
    image1: "/publicContain.jpg",
    title2: "Relaxing Spa",
    description2: "Rejuvenating Spa Treatments Indulge in a range of soothing therapies designed for ultimate relaxation.",
    image2: "/publicContain.jpg",
    general:
      "Elevate your getaway with our exceptional amenities that cater to all your desires.",
  },
  3: {
    title1: "Rooftop Oasis",
    description1: "Stunning Rooftop Pool Enjoy breathtaking sunsets while lounging by the pool.",
    image1: "/publicContain.jpg",
    title2: "State-of-the-Art Gym",
    description2: "Fully Equipped Fitness Center Maintain your fitness routine with our premium facilities.",
    image2: "/publicContain.jpg",
    general:
      "Discover a luxurious experience that rejuvenates your body, mind, and spirit.",
  },
};

export const About = () => {
  return (
    <Gutter className={styles.container}>
      <div className={styles.image}>
        <Image src={"dot.svg"} alt="" width={200} height={150} />
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <div className={styles.head}>
            <h1>About Us</h1>
          </div>
          <div className={styles.discription}>
            <div className={styles.title}>
              <h1>
                Experience Luxury & Comfort at <span>New</span>
              </h1>
            </div>
            <div className={styles.disc}>
              <p>
                Immerse yourself in a luxurious experience crafted with elegance
                and sophistication. Indulge in stunning ocean views, exquisite
                dining, and rejuvenating spa services designed to provide
                unparalleled comfort during your stay.
              </p>
            </div>
          </div>
          <button className={styles.button}>Book your Stay <Icons.UpRight size={20}/></button>
        </div>
        <div>
          <Slider
            items={cardData}
            interval={3000}
            renderItem={(item) => (
              <div className={styles.slider}>
                <div className={styles.text}>
                  <div className={styles.item}>
                    <h3>{item.title1}</h3>
                    <p>{item.description1}</p>
                  </div>
                  <img src={item.image1} alt="" width={450} height={500} />
                </div>
                <div className={styles.text2}>
                  <div className={styles.items}>
                    <h3>{item.title2}</h3>
                    <p>{item.description2}</p>
                  </div>
                  <img src={item.image2} alt="" width={350} height={350} />
                  <p>{item.general}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </Gutter>
  );
};
