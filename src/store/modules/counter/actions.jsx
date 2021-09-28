export const addValue = (count) => {
  return {
    type: "ADD_NUMBER",
    count
  };
};

export const subValue = (count) => {
  return {
    type: "SUB_NUMBER",
    count
  };
};
