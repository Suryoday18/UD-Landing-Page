import React, { useState, useEffect } from "react";
import "./NewsTicker.css";

const NewsTicker = () => {
  const [current, setCurrent] = useState(0);
  const lines = [
    "Leading Prosperity Under DAY-NULM HIMACHAL PRADESH",
    "For street light Complaints (EESL) - in ULBs (HP). Pl Call on Toll Free - 18001803580"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current + 1) % lines.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <div className="news-ticker">
      <div className="line">
        {lines[current]}
      </div>
      <div className="line">
        {lines[(current + 1) % lines.length]}
      </div>
    </div>
  );
};

export default NewsTicker;
