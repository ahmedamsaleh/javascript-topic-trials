const current = (now = new Date()) => {
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1
  };
};

const prior = (now = new Date()) => {
  const lastMonth = new Date(now.setMonth(now.getMonth() - 1));
  return {
    year: lastMonth.getFullYear(),
    month: lastMonth.getMonth() + 1
  };
};

export {current, prior};
