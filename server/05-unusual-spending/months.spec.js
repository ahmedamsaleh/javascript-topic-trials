import * as months from './months';
describe('show that infrastructure work', () => {
  it('month spec', () => {
    true.should.be.true();
  });

  describe.only('months should', () => {
    it('return prior month', () => {
      months.prior().should.be.deepEqual({year: 2017, month: 3});
    });

    it('return prior month current', () => {
      months.current().should.be.deepEqual({year: 2017, month: 4});
    });

  });
});
