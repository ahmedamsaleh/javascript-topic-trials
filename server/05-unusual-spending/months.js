const current = () => {
  return {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1
  };
};

const prior = () => {
  return {
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  };
};

export {current, prior};
