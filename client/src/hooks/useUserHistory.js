import React, { useState } from "react";

function useUserHistory() {
  const [userHistory, setUserHistory] = useState(() => {
    const storedValue = localStorage.getItem("user-history");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });
  return {};
}

export default useUserHistory;

// useState(() => {
//     const storedValue = localStorage.getItem("cart-value");
//     if (storedValue !== null) return JSON.parse(storedValue);
//     else return 0;
//   });
// const useFetchData = (apiEndpoint) => {
//     const [isLoaded, setLoading] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       setLoading(true);
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(apiEndpoint);
//           setLoading(false);
//           setData(response.data);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       fetchData();
//     }, [apiEndpoint]);

//     return {
//       isLoaded,
//       data,
//     };
//   };
