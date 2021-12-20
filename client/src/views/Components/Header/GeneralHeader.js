import Header from "components/Header/Header";
import React from "react";
import HeaderLinks from "components/Header/HeaderLinks.js";
const GeneralHeader = () => {
  return (
    <div>
      <Header
        brand="SANAL HASTANE"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        rightLinks={<HeaderLinks />}
      />
    </div>
  );
};
export default GeneralHeader;
