import axios from "axios";
import { useEffect, useState } from "react";

export default <T>(url?: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) {
      return;
    }
    search(url);
  },[url]);

  const search = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, search };
};
