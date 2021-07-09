import React, { useState, useEffect } from "react";
import { GoContainer } from "./gototopStyles";

const GoToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;

      isTop !== true ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  function handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <GoContainer>
      {scrolled && (
        <button
          id="goToTop"
          onClick={() => handleGoToTop()}
          title="Go To Top"
        ></button>
      )}
    </GoContainer>
  );
};

export default GoToTop;
