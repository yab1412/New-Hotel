"use client";

import React, { useState } from "react";
import style from "./index.module.scss";
import { Gutter } from "../../components/Gutter";
import { Icons } from "../../components/Icons";

const qandaData = [
  {
    question: "How Do I Make a Reservation at New Hotel?",
    answer:
      "Reservations can be easily made through our website by visiting the Booking page. You may also contact our customer service at 555-555-5555 for assistance.",
  },
  {
    question: "What Amenities Does New Hotel Offer?",
    answer:
      "Our hotel provides a range of luxurious amenities, including a rejuvenating spa, rooftop pool with ocean views, gourmet dining options, and a state-of-the-art fitness center, ensuring your stay is both relaxing and indulgent.",
  },
  {
    question: "Can I Host An Event In Your Hotel?",
    answer:
      "Yes, we offer exceptional event spaces perfect for weddings, corporate gatherings, and private celebrations. For more information, please check our About Us page or contact our event coordinator.",
  },
  {
    question: "What Safty Measure Do You Have In Place?",
    answer:
      "We prioritize your safety with rigorous hygiene protocols, regular sanitization of all spaces, and trained staff to ensure a secure and welcoming environment during your stay.",
  },
  {
    question: "How Can I Reach Cusomer Service?",
    answer:
      "Our customer support team is available 24/7. You can contact us via the Contact Us page or by calling 555-555-5555 for any inquiries or assistance needed.",
  },
  {
    question: "What Should I Know Before My Visit?",
    answer:
      "We recommend reviewing our Terms & Conditions and ensuring you have all required documentation for check-in. Additionally, consider packing for the array of activities we offer, from spa treatments to beach excursions.",
  },
];

export const QandA = () => {
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});

  const handleSelect = (question: string) => {
    setShowAnswer((prevShowAnswer) => {
      const newShowAnswer = { ...prevShowAnswer };
      Object.keys(newShowAnswer).forEach((key) => {
        newShowAnswer[key] = false;
      });
      newShowAnswer[question] = true;
      return newShowAnswer;
    });

    if (showAnswer[question]) {
      setShowAnswer((prevShowAnswer) => ({
        ...prevShowAnswer,
        [question]: false,
      }));
    } else {
      setShowAnswer((prevShowAnswer) => ({
        ...prevShowAnswer,
        [question]: true,
      }));
    }
  };

  return (
    <Gutter className={style.container}>
      <div id="FAQ" className={style.main}>
        <div className={style.title}>
          <div className={style.head}>
            <h1>
              Your Questions <span>Answered</span>
            </h1>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.blur}></div>
          {qandaData.map((item, key) => (
            <div key={key} className={style.questions}>
              <div
                className={style.question}
                onClick={() => handleSelect(item.question)}
              >
                <h2>{item.question}</h2>
                <button onClick={() => handleSelect(item.question)}>
                  {showAnswer[item.question] ? (
                    <Icons.UpArrow size={20} color="#2e8b92" />
                  ) : (
                    <Icons.DownArrow size={20} color="#2e8b92" />
                  )}
                </button>
              </div>
              {showAnswer[item.question] && (
                <div className={style.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
