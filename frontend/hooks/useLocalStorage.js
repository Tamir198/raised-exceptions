import { useEffect, useState } from "react";

export const getItem = async (itemName) => {
  return await JSON.parse(localStorage.getItem(itemName));
};

export const setItem = (itemName, value) => {
  return localStorage.setItem(itemName, JSON.stringify(value));
};

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
