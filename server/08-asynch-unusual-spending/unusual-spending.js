/**
 * Created by jhtrujil on 4/10/2017.
 */

import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  return fetch(userId).then((payments) => {
    let categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  });
};

export {unusualSpending};
