export const getItem = async (itemName) => {
  return await JSON.parse(localStorage.getItem(itemName));
};

export const setItem = async (itemName, value) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

export const addItem = async (itemName, value) => {
  const currItems = await getItem(itemName);
  if (currItems === null) {
    localStorage.setItem(itemName, JSON.stringify([value]));
    return;
  }

  const newItems = [...currItems, value];
  await setItem(itemName, newItems);
};

export const deleteItem = (itemName, value) => {
  localStorage.removeItem(itemName, JSON.stringify(value));
};
