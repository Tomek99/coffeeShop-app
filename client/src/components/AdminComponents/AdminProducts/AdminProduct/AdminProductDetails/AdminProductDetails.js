import React from "react";
import styles from "./AdminProductDetails.module.scss";

function AdminProductDetails({ productDetails }) {
  return (
    <div className={styles.AdminProductDetails}>
      <p className={styles.headerText}>Product details</p>
      <dl>
        {Object.keys(productDetails).map((objectKey, index) =>
          objectKey !== "__v" ? (
            <span key={index} className={styles.producText}>
              <dt>{objectKey}:</dt>
              <dd>
                {(() => {
                  switch (objectKey) {
                    case "productRatings":
                      return productDetails[objectKey].map(
                        (value) => value + ", "
                      );
                    case "available":
                      return productDetails[objectKey].toString();
                    default:
                      return productDetails[objectKey];
                  }
                })()}
              </dd>
            </span>
          ) : null
        )}
      </dl>
    </div>
  );
}

export default AdminProductDetails;
