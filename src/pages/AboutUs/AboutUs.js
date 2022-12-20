import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  AboutUsNavList,
  AboutCs,
  FAQ,
  OurTeam,
  BeansVideo,
} from "../../components/index";

function AboutUs() {
  // NESTED ROUTES REACT / OUTLINE WAŻNE
  return (
    <>
      <BeansVideo />
      <AboutUsNavList />
      <Routes>
        <Route exact path={"about-coffee-shop"} element={<AboutCs />} />
        <Route path={"our-team"} element={<OurTeam />} />
        <Route path={"FAQ"} element={<FAQ />} />
        <Route path={"*"} element={<AboutCs />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default AboutUs;
