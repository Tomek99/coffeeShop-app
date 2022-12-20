import React from "react";
import { Outlet } from "react-router-dom";
import { AboutUsNavList, BeansVideo } from "../../components/index";

function AboutUs() {
  // NESTED ROUTES REACT / OUTLINE WAŻNE
  return (
    <>
      <BeansVideo />
      <AboutUsNavList />
      <Outlet />
    </>
  );
}

export default AboutUs;
