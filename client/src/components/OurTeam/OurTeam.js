import React from "react";
import Team from "../TeamMember/TeamMember";
import styles from "./OurTeam.module.scss";
import Member from "../../data/member.json";
import Header from "../HeaderSection/HeaderSection";
function OurTeam() {
  return (
    <div className={styles.OurTeam}>
      <Header firstWord="Leadership" />
      <p className={styles.aboutTeam}>
        We're led by a team who constantly questions, tinkers, and chellenges to
        unlock great creativity around every turn
      </p>
      <div className={styles.team}>
        {Member.map((item) => (
          <Team
            id={item.id}
            key={item.id}
            url={item.url}
            name={item.name}
            position={item.position}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
