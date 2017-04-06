/**
 * Created by jhtrujil on 4/5/2017.
 */

import * as months from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {
  const priorMonth = months.prior();
  const currentMonth = months.current();

  return {
    current: {
      month: currentMonth,
      payments: apiWrapper(userId, currentMonth)
    },

    prior: {
      month: priorMonth,
      payments: apiWrapper(userId, priorMonth)
    }
  };
};

export {fetch};
