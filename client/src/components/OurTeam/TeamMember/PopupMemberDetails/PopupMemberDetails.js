import React from "react";
import styles from "./PopupMemberDetails.module.scss";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import BtnTwitter from "../../../Buttons/BtnTwitter/BtnTwitter";
import BtnClose from "../../../Buttons/BtnClose/BtnClose";

function PopupMemberDetails(props) {
  const { id, item, handleShowMember } = props;
  return (
    <div className={styles.PopupMemberDetails}>
      <div className={styles.memberDetails}>
        <div className={styles.imgMemberSection}>
          <img src={item.url} alt={id} className={styles.imgMember} />
          <BtnTwitter />
        </div>
        <div className={styles.memberContent}>
          <div>
            <h1>{item.name}</h1>
            <h3>{item.position}</h3>
          </div>
          <p>{item.text}</p>
        </div>
        <div className={styles.divClose}>
          <BtnClose handleBtn={handleShowMember} />
        </div>
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
  handleShowMember: PropTypes.func,
};
export default PopupMemberDetails;
