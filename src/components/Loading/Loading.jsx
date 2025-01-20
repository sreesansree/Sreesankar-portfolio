import React, { useState, useEffect } from "react";
import "./style.css";

const Loading = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots < 5 ? prevDots + 1 : 1));
    }, 500); // Change dots every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="loading-wrapper">
      <h3 className="loading-text">Loading<span className="dots">{'.'.repeat(dots)}</span></h3>
    </div>
  );
};

export default Loading;