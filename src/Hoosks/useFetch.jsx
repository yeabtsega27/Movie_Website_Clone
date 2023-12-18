import { useEffect, useState } from "react";
import Axios from "../Lib/Axios";

const useFetch = ({ url, params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await Axios.get(url, { params: params });
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const reload = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(url, { params: params });
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, loading, error, reload };
};

export default useFetch;
