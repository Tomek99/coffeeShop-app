import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (apiEndpoint) => {
  const [isLoaded, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return {
    isLoaded,
    data,
  };
};

export default useFetchData;
