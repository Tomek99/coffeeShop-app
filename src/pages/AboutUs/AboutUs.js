import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  AboutUsNavList,
  AboutCs,
  FAQ,
  OurTeam,
  RewardCS,
  BeansVideo,
} from "../../components/index";

function AboutUs() {
  // NESTED ROUTES REACT / OUTLINE WAŻNE
  return (
    <>
      <BeansVideo />
      <AboutUsNavList />
      <Routes>
        <Route path={"about-coffee-shop"} element={<AboutCs />} />
        <Route path={"our-team"} element={<OurTeam />} />
        <Route path={"reward-coffee-shop"} element={<RewardCS />} />
        <Route path={"FAQ"} element={<FAQ />} />
        <Route path={"*"} element={<AboutCs />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default AboutUs;
