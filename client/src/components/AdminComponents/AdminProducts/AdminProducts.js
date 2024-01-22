import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.scss";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminProduct from "./AdminProduct/AdminProduct";
import BtnAddNewProduct from "../../Buttons/BtnAddNewProduct/BtnAddNewProduct";
import AdminAddNewProduct from "./AdminProduct/AdminAddNewProduct/AdminAddNewProduct";

function AdminProducts() {
  const [isLoaded, setLoading] = useState(true);
  const [products, setProducts] = useState(true);
  const [newProductIsDisplayed, setNewProductIsDisplayed] = useState(false);

  function handleNewProductIsDisplayed() {
    setNewProductIsDisplayed(!newProductIsDisplayed);
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const products = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/products`
        );
        setLoading(false);
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoaded ? (
    <LoaderSpinner />
  ) : (
    <div className={styles.AdminProducts}>
      <div>
        <BtnAddNewProduct
          handleNewProductIsDisplayed={handleNewProductIsDisplayed}
        />
        {newProductIsDisplayed ? (
          <AdminAddNewProduct
            handleNewProductIsDisplayed={handleNewProductIsDisplayed}
          />
        ) : null}
      </div>
      <section className={styles.productsSection}>
        {products.map((product, index) => (
          <AdminProduct product={product} key={index} />
        ))}
      </section>
    </div>
  );
}

export default AdminProducts;
