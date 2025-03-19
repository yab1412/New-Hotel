import React from "react";
import style from "./index.module.scss";
import { Gutter } from "../../components/Gutter";
import { Icons } from "../../components/Icons";

export const Contact = () => {
  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.pic}>
          <Icons.Location size={20} color="red"/>
          <h1>OurLocation</h1>
        </div>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490915.205984663!2d6.175568987499996!3d52.43323390000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af93b7e9c82cc1%3A0x4e1bebf9534efdab!2sThe%20Ritz-Carlton%2C%20Wolfsburg!5e0!3m2!1sen!2set!4v1742411617267!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* style="border: 1px solid black" */}
        </div>
      </div>
    </Gutter>
  );
};
