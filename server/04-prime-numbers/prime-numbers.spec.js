/*eslint no-param-reassign: "off" */

describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactors = function (number) {
    const factors = [];
    if (number > 1) {
      if (number % 2 === 0) {
        factors.push(2);
        number /= 2;
      }
      if (number > 1) factors.push(number);
    }
    return factors;
  };

  describe.only('a prime factors function should return', () => {
    it('no prime factor for 1', () => {
      primeFactors(1).should.be.deepEqual([]);
    });

    it('2 for 2', () => {
      primeFactors(2).should.be.deepEqual([2]);
    });

    it('3 for 3', () => {
      primeFactors(3).should.be.deepEqual([3]);
    });

    it('2 ,2  for 4', () => {
      primeFactors(4).should.be.deepEqual([2, 2]);
    });

    it('5 for 5');
    it('2,3 for 6');
    it('2,2,2 for 8');
    it('3,3 for 9');
  });
});
