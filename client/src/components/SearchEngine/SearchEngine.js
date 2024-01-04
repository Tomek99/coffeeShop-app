import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchEngine.module.scss";
import PropTypes from "prop-types";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import { Context } from "../../Contexts/Context";
import FilterItem from "./FilterItem/FilterItem";

function SearchEngine({ isSearchOpen, handleSearch }) {
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
    setFilteredList(updatedList.slice(0, 12));
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
        <BtnClose handleBtn={handleSearch} btnId="btn-close-searcher" />
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
          {filteredList.length ? (
            filteredList.map((item, index) => (
              <FilterItem item={item} key={index} clearSearch={clearSearch} />
            ))
          ) : value.length > 2 ? (
            <div style={{ fontSize: "1.3rem" }}>No results</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

SearchEngine.propTypes = {
  isSearchOpen: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default SearchEngine;
