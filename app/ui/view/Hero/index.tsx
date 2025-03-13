"use client";

import React from "react";
import { Gutter } from "../../components/Gutter";
import style from "./index.module.scss";
import { Slider } from "../../components/Slider";
import Image from "next/image";
import { Icons } from "../../components/Icons";
import { Head } from "../../components/Head";
import { Weather } from "../../components/Weather";

const cardData = {
  1: {
    title: "Title 1",
    description: "Description 1",
    AuthorName: "Author 1",
  },
  2: {
    title: "Title 2",
    description: "Description 2",
    AuthorName: "Author 2",
  },
  3: {
    title: "Title 3",
    description: "Description 3",
    AuthorName: "Author 3",
  },
};

export const Hero = () => {
  return (
    <Gutter className={style.container}>
      <div className={style.glass}>
        <div className={style.rectangle}></div>
        <div className={style.circle}></div>
        <div className={style.blur}></div>
        <div className={style.head}>
          <h1>Hero</h1>
          <Head />
          {/* <button className={style.link}>Book Now <Icons.UpRight size={40}/></button> */}
          <Weather />
        </div>
        <div className={style.grid}>
          <div className={style.title}>
            <h1>
              Experience Luxury & Comfort at <span>New Hotel</span> Designed for
              You
            </h1>
            <p>
              Immerse yourself in unrivaled elegance with breathtaking views and
              exceptional service. Each unique space is thoughtfully crafted to
              provide the ultimate retreat and an experience you'll cherish
              forever.
            </p>
            <button>
              <Icons.Call size={20} />
              Book Your Stay Now <Icons.UpRight color={"#fff"} size={20} />
            </button>
          </div>
          <div className={style.image}>
            <Image src={"/publicContain.jpg"} alt="" width={750} height={550} />
            <div className={style.discription}>
              <h2>Explore Our Luxurious Amenities</h2>
              <p>
                Experience unparalleled facilities, from a rejuvenating spa to a
                stunning rooftop pool, designed for your relaxation and
                enjoyment throughout your stay.
              </p>
              <button>
                View Our Amenities <Icons.UpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
