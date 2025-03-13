"use client";

import React, { useEffect } from "react";

export const Weather = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const element = document.getElementById(
      "mrwid5b515aa4f4ac5ef45727f3c9b594798a"
    );
    if (element) {
      script.src =
        "https://api.meteored.com/widget/loader/5b515aa4f4ac5ef45727f3c9b594798a";
      script.async = true;
      element.appendChild(script);
    }
  }, []);

  return <div id="mrwid5b515aa4f4ac5ef45727f3c9b594798a"></div>;
};
