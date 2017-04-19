import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = function (userID) {
  let payments = fetch(userID);
  let categorizedPayments = categorize(payments);
  email(userID, categorizedPayments);
};
export {unusualSpending};
