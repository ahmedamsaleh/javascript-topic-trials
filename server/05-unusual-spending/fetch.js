import * as months from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {
  return {
    current: {month: months.current(), payments: apiWrapper(userId, 'current')},
    prior: {month: months.prior(), payments: apiWrapper(userId, 'prior')}
  };
};

export {fetch};
