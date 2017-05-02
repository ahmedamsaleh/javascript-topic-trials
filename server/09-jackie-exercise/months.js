/**
 * Created by jhtrujil on 5/1/2017.
 */

const prior = () => {
  const currentDate = new Date();
  return currentDate.getMonth(currentDate.setMonth(currentDate.getMonth() - 1)) + 1;
};

const current = () => {
  const currentDate = new Date();
  return currentDate.getMonth(currentDate.setMonth(currentDate.getMonth())) + 1;
};

export {prior, current};
