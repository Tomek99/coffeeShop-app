import React from "react";
import styles from "./TeamMember.module.scss";
import { BsArrowRight } from "react-icons/bs";
import PopupMemberDetails from "./PopupMemberDetails/PopupMemberDetails";
import PropTypes from "prop-types";

function Team({ item, handleShowMember, showMember, id }) {
  const { url, name, position, text } = item;

  return (
    <div className={styles.TeamMember}>
      <div className={styles.memberImg}>
        <img src={url} alt="" />

        <button
          className={styles.btnArrow}
          onClick={() => handleShowMember(id)}
        >
          <BsArrowRight className={styles.iconArrow} />
        </button>
      </div>
      <div className={styles.content} onClick={() => handleShowMember(id)}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
      {showMember === id ? (
        <PopupMemberDetails
          id={id}
          url={url}
          name={name}
          position={position}
          text={text}
          handleShowMember={handleShowMember}
        />
      ) : null}
    </div>
  );
}

Team.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string,
  handleShowMember: PropTypes.func,
  showMember: PropTypes.number,
};
export default Team;
