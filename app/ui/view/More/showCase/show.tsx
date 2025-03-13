"use client";
import { useState, useEffect } from "react";
import styles from "./Show.module.scss";

const images = [
  "/image.jpg",
  "/publicContain.jpg",
  "/image.jpg",
  "/publicContain.jpg",
];

export default function ImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.showcase}>
      <div className={styles.currentImage}>
        <img src={images[currentIndex]} alt="Showcase" />
      </div>
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentIndex ? styles.active : ""}
          />
        ))}
      </div>
    </div>
  );
}
