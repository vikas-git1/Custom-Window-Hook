import React from "react";
import { useState, useEffect } from "react";
import "./CustomComponent.css"; // Import the CSS file

const useWindow = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return size;
};

const CustomComponent = () => {
  const { height, width } = useWindow();
  return (
    <div className="container">
      <div className="window-size-card">
        <h2>Window Size</h2>
        <p>
          {width} X {height}
        </p>
      </div>
    </div>
  );
};

export default CustomComponent;
