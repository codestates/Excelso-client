import React from "react";

import { FootDiv, FootLogo, Members } from "./footerStyles";

const Footer = () => {
  return (
    <FootDiv>
      <FootLogo>
        <p>EXCELSO</p>
      </FootLogo>
      <Members>
        <span>안아림</span>
        <span>권혁재</span>
        <span>최찬호</span>
      </Members>
    </FootDiv>
  );
};

export default Footer;
