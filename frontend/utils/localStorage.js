export const getErrors = () => {
  return JSON.parse(localStorage.getItem("errors"));
};

export const setErrors = (errors) => {
  return localStorage.setItem("errors", JSON.stringify(errors));
};
