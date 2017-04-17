const current = (today = new Date()) => {

  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1
  };
};

const prior = (today = new Date()) => {
  let lastMonth = today.setMonth(today.getMonth() - 1);
  const lastMonthDate = new Date(lastMonth);

  return {
    year: lastMonthDate.getFullYear(),
    month: lastMonthDate.getMonth() + 1
  };
};

export {current, prior};


