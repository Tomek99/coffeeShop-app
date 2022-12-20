import React from "react";
import styles from "./TeamMember.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import PopupMemberDetails from "../PopupMemberDetails/PopupMemberDetails";

function Team(props) {
  const { id, url, name, position, text } = props;
  const [isActive, setActive] = useState(false);

  const showDetails = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <>
      <div key={id} className={styles.TeamMember}>
        <div className={styles.memberImg}>
          <img src={url} alt="" />

          <button className={styles.btnArrow} onClick={showDetails}>
            <BsArrowRight className={styles.iconArrow} />
          </button>
        </div>
        <div className={styles.content} onClick={showDetails}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
        <PopupMemberDetails
          isActive={isActive}
          id={id}
          url={url}
          name={name}
          position={position}
          text={text}
          showDetails={showDetails}
        />
      </div>
    </>
  );
}

export default Team;
