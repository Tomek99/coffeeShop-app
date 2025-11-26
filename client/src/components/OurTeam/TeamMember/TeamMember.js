import React from "react";
import styles from "./TeamMember.module.scss";
import { BsArrowRight } from "react-icons/bs";
import PopupMemberDetails from "./PopupMemberDetails/PopupMemberDetails";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
function Team({ item, handleShowMember, showMember, id }) {
  const { url, name, position } = item;

  const gmail = name.replace(/\s/g, "") + "@coffeShop.com";

  return (
    <div className={styles.TeamMember}>
      <div className={styles.memberImg}>
        <img src={url} alt="" />
      </div>
      <div className={styles.contentMember}>
        <h3>{name}</h3>
        <p>
          <b>{position}</b>
        </p>

        <p>📞 +48 999 999 999</p>
        <p>✉️ {gmail}</p>
        <p className={styles.socialMedia}>
          <a href="http://linkedin.com/" className={styles.socialMediaBtn}>
            <FaLinkedin />
          </a>
          <a href="http://x.com/" className={styles.socialMediaBtn}>
            <IoLogoTwitter />
          </a>
        </p>
      </div>
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
