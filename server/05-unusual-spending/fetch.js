import * as months from './months';
import {api} from './api';

const fetch = (userId) => {
  return {
    current: {month: months.current(), payments: api(userId, 'current')},
    prior: {month: months.prior(), payments: api(userId, 'prior')}
  };
};

export {fetch};
