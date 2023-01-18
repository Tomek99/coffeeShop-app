import React from "react";
import { useState } from "react";
import {
  AboutUsNavList,
  BeansVideo,
  OurTeam,
  FAQ,
  AboutCs,
} from "../../components/index";

function AboutUs() {
  const [tabNumber, setTabNumber] = useState(0);

  const switchTab = (tabNumber) => {
    setTabNumber(tabNumber);
  };
  return (
    <>
      <BeansVideo />
      <AboutUsNavList switchTab={switchTab} tabNumber={tabNumber} />
      {(() => {
        switch (tabNumber) {
          case 1:
            return <OurTeam />;
          case 2:
            return <FAQ />;
          default:
            return <AboutCs />;
        }
      })()}
    </>
  );
}
export default AboutUs;
