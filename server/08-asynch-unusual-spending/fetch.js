/**
 * Created by jhtrujil on 4/5/2017.
 */

import * as months from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {
  const priorMonth = months.prior();
  const currentMonth = months.current();

  return Promise.all([apiWrapper(userId, priorMonth), apiWrapper(userId, currentMonth)]).then(payments => {
    return {
      current: {
        month: currentMonth,
        payments: payments[1]
      },

      prior: {
        month: priorMonth,
        payments: payments[0]
      }
    };
  });
};

export {fetch};
