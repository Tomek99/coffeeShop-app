import React from "react";
import styles from "./PopupMemberDetails.module.scss";
import { GrTwitter } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";

function PopupMemberDetails(props) {
  const { id, url, name, position, text, showDetails, isActive } = props;
  return (
    <div
      className={
        isActive
          ? `${styles.PopupMemberDetails} ${styles.active}`
          : styles.PopupMemberDetails
      }
    >
      <div className={styles.memberDetails}>
        <div className={styles.imgMemberSection}>
          <img src={url} alt={id} className={styles.imgMember} />
          <a href="http://twitter.com" className={styles.btnFollowOnTwitter}>
            {" "}
            <GrTwitter className={styles.btnIconTwitter} />
            <span>Follow on twitter</span>
          </a>
        </div>
        <div className={styles.memberContent}>
          <div>
            <h1>{name}</h1>
            <h3>{position}</h3>
          </div>
          <p>{text}</p>
        </div>
        <button onClick={showDetails} className={styles.btnClose}>
          <VscChromeClose className={styles.btnIcon} />
        </button>
      </div>
    </div>
  );
}

PopupMemberDetails.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string,
  showDetails: PropTypes.func,
  isActive: PropTypes.bool,
};
export default PopupMemberDetails;
