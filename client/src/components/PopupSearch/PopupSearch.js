import React, { useContext, useEffect, useState } from "react";
import styles from "./PopupSearch.module.scss";
import PropTypes from "prop-types";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import { Context } from "../../Contexts/Context";
import FilterItem from "./FilterItem/FilterItem";

function PopupSearch({ isSearchOpen, handleSearch }) {
  const { products } = useContext(Context);
  const [filteredList, setFilteredList] = useState([]);
  const [value, setValue] = useState("");

  function filterBySearch(e) {
    const query = e.target.value;

    let updatedList = [...products];
    if (e.target.value.length <= 2) {
      updatedList = [];
    } else {
      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }

    setValue(query);
    setFilteredList(updatedList);
  }

  function clearSearch() {
    setValue("");
    setFilteredList([]);
    handleSearch();
  }

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
            value={value}
            className={styles.searchInput}
            placeholder="Search for products..."
            autoComplete="off"
            onChange={filterBySearch}
          />
        </label>
      </div>
      <div className={styles.filteredProducts}>
        <div className={styles.flexRowTemplate}>
          {filteredList.map((item, index) => (
            <FilterItem item={item} key={index} clearSearch={clearSearch} />
          ))}
        </div>
      </div>
    </div>
  );
}

PopupSearch.propTypes = {
  isSearchOpen: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default PopupSearch;
