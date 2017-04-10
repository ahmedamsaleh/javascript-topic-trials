/**
 * Created by jhtrujil on 4/9/2017.
 */

import {categorize} from './categorize';

describe('canary test shows', () => {
  it('that the infrastructure runs', () => {
    true.should.be.true();
  });
});

describe('categorize should', () => {
  it('return categorized payments', () => {
    let payments = [{
      month: {year: 2017, month: 4},
      payments: [{amount: 90, category: 'golf'}]
    }, {
      month: {year: 2017, month: 4},
      payments: [{amount: 490, category: 'dinner'}]
    }];

    let categorizedPayments = {
      month: {year: 2017, month: 4},
      payments: [{amount: 90, category: 'golf'}, {amount: 490, category: 'dinner'}]
    };

    categorize(payments).should.deepEqual(categorizedPayments);
  });
});
