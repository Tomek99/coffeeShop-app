import React, { useState } from "react";
import TeamMember from "./TeamMember/TeamMember";
import styles from "./OurTeam.module.scss";
import Members from "../../data/members.json";
import Header from "../HeaderSection/HeaderSection";
import BlurScreen from "../ProfileMenu/BlurScreen/BlurScreen";
function OurTeam() {
  const [isActive, setIsActive] = useState(false);
  const [showMember, setShowMember] = useState();

  function handleBlurScreen() {
    setIsActive(false);
    setShowMember();
    handleScrollBar();
  }

  function handleShowMember(id) {
    setShowMember(id);
    setIsActive(!isActive);
    handleScrollBar();
  }

  let elementHTML = window.document.getElementsByTagName("html")[0];
  function handleScrollBar() {
    if (!isActive) elementHTML.style.overflowY = "hidden";
    else elementHTML.style.overflowY = "scroll";
  }

  return (
    <div className={styles.OurTeam}>
      <Header firstWord="Meet" secondWord={"Our Team"} />
      <p className={styles.aboutTeam}>
        We're led by a team who constantly questions, tinkers, and chellenges to
        unlock great creativity around every turn
      </p>
      <div className={styles.team}>
        {Members.map((item, index) => (
          <TeamMember
            key={index}
            id={index}
            item={item}
            handleShowMember={handleShowMember}
            showMember={showMember}
          />
        ))}
        {/* {isActive ? <BlurScreen handleBlurScreen={handleBlurScreen} /> : null} */}
      </div>
    </div>
  );
}

export default OurTeam;
