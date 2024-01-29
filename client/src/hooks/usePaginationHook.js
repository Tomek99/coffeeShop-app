import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePaginationHook = (
  initialPage = 0,
  data = [],
  itemsPerPage = 10,
  pathname = ""
) => {
  const [pageNumber, setPageNumber] = useState(initialPage);
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const navigate = useNavigate();
  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname,
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };

  return {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  };
};

export default usePaginationHook;
