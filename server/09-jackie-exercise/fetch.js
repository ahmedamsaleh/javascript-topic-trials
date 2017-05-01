/**
 * Created by jhtrujil on 4/28/2017.
 */
import * as months from './months';
import {api} from './api';

const fetch = (userId) => {
  let priorMonth = months.prior();
  let currentMonth = months.current();
  let priorMonthsPayments = api(userId, priorMonth);
  let currentMonthsPayments = api(userId, currentMonth);

  return {
    current: {
      month: currentMonth,
      payments: currentMonthsPayments
    },

    prior: {
      month: priorMonth,
      payments: priorMonthsPayments
    }
  };
};

export {fetch};
