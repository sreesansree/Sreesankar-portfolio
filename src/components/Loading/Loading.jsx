// import { useState, useEffect } from "react";
import "./style.css";

const Loading = () => {
  // const [dots, setDots] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDots((prevDots) => (prevDots < 5 ? prevDots + 1 : 1));
  //   }, 500); // Change dots every 500ms

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);

  return (
    <div className="loading-wrapper">
      <h3 className="loading-text">
        {/* <span className="dots">{".".repeat(dots)}</span> */}
      </h3>
      <h1 className="h1">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </h1>
    </div>
  );
};

export default Loading;
