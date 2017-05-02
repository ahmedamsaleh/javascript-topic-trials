/**
 * Created by jhtrujil on 5/1/2017.
 */

describe('canary test shows', () => {
  it('the infrastructure works', () => {
    true.should.be.true();
  });
});

describe.only('months should', () => {
  it('return prior months', () => {
    //dummy variables
    const priorMonth = 4;

    //SUT
    let months = require('./months');

    //assert
    months.prior().should.deepEqual(priorMonth);
  });
  it('return current months', () => {
    //dummy variables
    const currentMonth = 5;

    //SUT
    let months = require('./months');

    //assert
    months.current().should.deepEqual(currentMonth);
  });
});


