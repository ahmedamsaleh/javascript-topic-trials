import * as months from './months';
describe('month spec', () => {
  it('show that infrastructure work', () => {
    true.should.be.true();
  });

  describe.only('months should return', () => {

    it('current month', () => {
      months.current(new Date(2017, 1, 2)).should.be.deepEqual({
        year: 2017,
        month: 2
      });
    });

    it('prior month', () => {
      months.prior(new Date(2017, 0, 2)).should.be.deepEqual({
        year: 2016,
        month: 12
      });
    });
  });
});
