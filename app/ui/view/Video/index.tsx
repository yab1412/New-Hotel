"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { Gutter } from "../../components/Gutter";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShowDescription(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 1000); // Delay video start by 5 seconds
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowDescription(true);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handlePause);
      return () => {
        videoElement.removeEventListener("ended", handlePause);
      };
    }
  }, []);
  return (
    <Gutter className={styles.videoContainer}>
      {showDescription && (
        <div className={styles.overlay}>
          <button className={styles.playButton} onClick={handlePlay}>
            ▶
          </button>
          <div className={styles.description}>
            <h1>Experience Luxury & Comfort at New Hotel</h1>
            <p>
              Discover your perfect getaway where elegance meets unparalleled
              service. Our luxury hotel is meticulously designed to provide a
              soothing atmosphere, high-class amenities, and unforgettable
              experiences tailored just for you.
            </p>
            <div className={styles.stat}>
              <div className={styles.item}>
                <h1>200</h1>
                <p>Elegant Rooms & Suites</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.item}>
                <h1>500</h1>
                <p>Satisfied Guests</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.item}>
                <h1>30</h1>
                <p>Unique Expriences</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.item}>
                <h1>15</h1>
                <p>Awards & Recognitions </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        className={styles.video}
        onClick={isPlaying ? handlePause : handlePlay}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Gutter>
  );
};
