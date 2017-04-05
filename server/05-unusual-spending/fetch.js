/**
 * Created by jhtrujil on 4/5/2017.
 */

import {current, prior} from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {
  const priorMonths = prior();
  const currentMonths = current();
  const priorMonthsPayment = apiWrapper(userId, priorMonths);
  const currentMonthsPayment = apiWrapper(userId, currentMonths);

};

export {fetch};
