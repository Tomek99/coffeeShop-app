import axios from "axios";
import React, { useEffect, useState } from "react";

function usePostData(apiEndpoint, id) {
  const [isLoaded, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.post(apiEndpoint, { id });
        console.log(response);
        setLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiEndpoint, id]);

  return {
    isLoaded,
    data,
  };
}

export default usePostData;
