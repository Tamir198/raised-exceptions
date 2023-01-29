export const getItem = async (itemName) => {
  return await JSON.parse(localStorage.getItem(itemName));
};

export const setItem = (itemName, value) => {
  return localStorage.setItem(itemName, JSON.stringify(value));
};

export const deleteItem = (itemName, value) => {
  return localStorage.removeItem(itemName, JSON.stringify(value));
};
