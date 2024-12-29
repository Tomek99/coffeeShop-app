import React, { useState } from "react";
import styles from "./ProductControlView.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import SquaresIcon from "./SquaresIcon/SquaresIcon";
import RowsMediumIcon from "./RowsMediumIcon/RowsMediumIcon";
import RowsSmallIcon from "./RowsSmallIcon/RowsSmallIcon";

import ProductSort from "../SortProducts/ProductSort";

function ProductControlView({
  isClicked,
  selectedView,
  collapseArrow,
  selectView,
  clickRef,
}) {
  return (
    <div className={styles.ProductControlView}>
      <div
        ref={clickRef}
        className={styles.productsViewPanel}
        style={isClicked ? { borderRadius: "8px 8px 0 0" } : null}
      >
        <div className={styles.selectBtn} onClick={collapseArrow}>
          {(() => {
            switch (selectedView) {
              case 0:
                return <SquaresIcon selectView={selectView} />;
              case 1:
                return <RowsMediumIcon selectView={selectView} />;
              case 2:
                return <RowsSmallIcon selectView={selectView} />;

              default:
                return null;
            }
          })()}
          <span>
            {isClicked ? (
              <TiArrowSortedUp size={15} />
            ) : (
              <TiArrowSortedDown size={15} />
            )}
          </span>
        </div>
        {isClicked ? (
          <div className={styles.selectSortDiv}>
            <SquaresIcon selectedView={selectedView} selectView={selectView} />
            <RowsMediumIcon
              selectedView={selectedView}
              selectView={selectView}
            />
            <RowsSmallIcon
              selectedView={selectedView}
              selectView={selectView}
            />
          </div>
        ) : null}
      </div>
      <ProductSort />
    </div>
  );
}

export default ProductControlView;
