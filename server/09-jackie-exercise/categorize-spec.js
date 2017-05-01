/**
 * Created by jhtrujil on 5/1/2017.
 */
describe('canary test should', () => {
  it('show infrastructure is working', () => {
    true.should.be.true();
  });
})

describe('categorize should', () => {
  it('return categorized payments', () => {

    //act and assert
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

    let categorize = require('./categorize').categorize;
    categorize(payments).should.deepEqual(categorizedPayments);
  });
})
