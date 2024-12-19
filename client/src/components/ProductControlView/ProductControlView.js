import React, { useState } from "react";
import styles from "./ProductControlView.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import SquaresIcon from "./SquaresIcon/SquaresIcon";
import RowsMediumIcon from "./RowsMediumIcon/RowsMediumIcon";
import RowsSmallIcon from "./RowsSmallIcon/RowsSmallIcon";

function ProductControlView({
  isClicked,
  selectedView,
  handleArrow,
  selectView,
}) {
  return (
    <div className={styles.ProductControlView}>
      <div
        className={styles.productsViewPanel}
        style={isClicked ? { borderRadius: "8px 8px 0 0" } : null}
      >
        <div className={styles.selectBtn} onClick={handleArrow}>
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
            <SquaresIcon selectView={selectView} />
            <RowsMediumIcon selectView={selectView} />
            <RowsSmallIcon selectView={selectView} />
          </div>
        ) : null}
      </div>
      <div>Sortowanie</div>
    </div>
  );
}

export default ProductControlView;
