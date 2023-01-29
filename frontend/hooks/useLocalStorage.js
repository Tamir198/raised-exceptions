import { useEffect, useState } from "react";

import { getItem } from "../utils/localStorageUtil";

export const useLocalStorage = (itemName) => {
  const [error, setError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const results = await getItem(itemName);
      setError(results);
    };

    fetchItems();
  }, []);

  return error;
};
