import React from "react";
import styles from "./Categories.module.scss";
function Categories() {
  return (
    <div className={styles.Categories}>
      <h1 className={styles.categoriesHeader}>Categories</h1>
      <ul className={styles.categoriesList}>
        <li>Arabica</li>
        <li>Robusta</li>
        <li>Single Origin</li>
        <li>Blends</li>
        <li>Espresso</li>
        <li>Decaf</li>
        <li>Organic</li>
        <li>Flavored</li>
        <li>Cold Brew</li>
        <li>Instant</li>
      </ul>
    </div>
  );
}

export default Categories;
