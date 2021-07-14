import React from "react";

import { FootDiv, FootLogo, Members } from "./footerStyles";

const Footer = () => {
  return (
    <FootDiv>
      <FootLogo>
        <p>EXCELSO</p>
      </FootLogo>
      <Members>
        <span>
          <a href="https://github.com/ahnella04">안아림</a>
        </span>
        <span>
          <a href="https://github.com/testtible">권혁재</a>
        </span>
        <span>
          <a href="https://github.com/SIBChoi">최찬호</a>
        </span>
      </Members>
    </FootDiv>
  );
};

export default Footer;
