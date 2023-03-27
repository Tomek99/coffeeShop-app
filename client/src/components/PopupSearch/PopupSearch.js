import React, { useContext, useState } from "react";
import styles from "./PopupSearch.module.scss";
import PropTypes from "prop-types";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import { Context } from "../../Contexts/Context";

function PopupSearch({ isSearchOpen, handleSearch }) {
  const { products } = useContext(Context);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={
        isSearchOpen
          ? `${styles.PopupSearch} ${styles.active}`
          : styles.PopupSearch
      }
    >
      <div className={styles.divFlexEnd}>
        <BtnClose handleBtn={handleSearch} />
      </div>
      <div className={styles.searchWrapper}>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className={styles.searchInput}
            placeholder="Search for products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

PopupSearch.propTypes = {
  isSearchOpen: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default PopupSearch;
