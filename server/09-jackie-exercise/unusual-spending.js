/**
 * Created by jhtrujil on 4/28/2017.
 */
import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  let promise = fetch(userId);
  promise.then((payments) => {
    let categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  });

  promise.catch((error) => {
    return error;
  });

  return promise;
};

export {unusualSpending};

