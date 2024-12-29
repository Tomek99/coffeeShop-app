import React, { useState } from "react";
import styles from "./ProductControlView.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import SquaresIcon from "./SquaresIcon/SquaresIcon";
import RowsMediumIcon from "./RowsMediumIcon/RowsMediumIcon";
import RowsSmallIcon from "./RowsSmallIcon/RowsSmallIcon";

import ProductSort from "../SortProducts/ProductSort";
import { useClickAway } from "use-click-away";

function ProductControlView({
  selectedView,
  selectView,
  sortOption,
  selectSortOption,
}) {
  const clickRef = React.useRef("");

  const [isClicked, setIsClicked] = useState(false);
  useClickAway(clickRef, () => {
    setIsClicked(false);
  });

  function collapseViewMenu() {
    setIsClicked(!isClicked);
  }

  return (
    <div className={styles.ProductControlView}>
      <div
        ref={clickRef}
        className={styles.productsViewPanel}
        style={isClicked ? { borderRadius: "8px 8px 0 0" } : null}
      >
        <div className={styles.selectBtn} onClick={collapseViewMenu}>
          {(() => {
            switch (selectedView) {
              case 0:
                return (
                  <SquaresIcon
                    selectView={selectView}
                    selectedView={null}
                    collapseViewMenu={collapseViewMenu}
                  />
                );
              case 1:
                return (
                  <RowsMediumIcon
                    selectView={selectView}
                    selectedView={null}
                    collapseViewMenu={collapseViewMenu}
                  />
                );
              case 2:
                return (
                  <RowsSmallIcon
                    selectView={selectView}
                    selectedView={null}
                    collapseViewMenu={collapseViewMenu}
                  />
                );

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
            <SquaresIcon
              selectedView={selectedView}
              selectView={selectView}
              collapseViewMenu={collapseViewMenu}
            />
            <RowsMediumIcon
              selectedView={selectedView}
              selectView={selectView}
              collapseViewMenu={collapseViewMenu}
            />
            <RowsSmallIcon
              selectedView={selectedView}
              selectView={selectView}
              collapseViewMenu={collapseViewMenu}
            />
          </div>
        ) : null}
      </div>
      <ProductSort
        sortOption={sortOption}
        selectSortOption={selectSortOption}
      />
    </div>
  );
}

export default ProductControlView;
