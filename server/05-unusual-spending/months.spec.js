/**
 * Created by jhtrujil on 4/6/2017.
 */

import * as months from './months';

describe('canary test shows', () => {
  it('that the infrastructure runs', () => {
    true.should.be.true();
  });
});

describe.only('months should', () => {
  it('return the current month', () => {
    months.current(new Date('2017-12-1')).should.deepEqual({year: 2017, month: 12});
  });

  it('return the prior month', () => {
    months.prior(new Date('2017-1-1')).should.deepEqual({year: 2016, month: 12});
  });
});
