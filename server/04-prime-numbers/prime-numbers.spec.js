/*eslint no-param-reassign : off*/
describe('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function primeFactorsOf(number) {
    let primeFactors = [];
    if (number === 0) throw new Error('Illegal input');
    for (let divisor = 2; number > 1; divisor = divisor + 1) {
      for (; number % divisor === 0; number /= divisor) {
        primeFactors.push(divisor);
      }
    }
    return primeFactors;
  }

  describe.only('a prime numbers function should', () => {
    it('return 2 for 2', () => {
      primeFactorsOf(2).should.be.deepEqual([2]);
    });

    it('return 3 for 3', () => {
      primeFactorsOf(3).should.be.deepEqual([3]);
    });

    it('return 2, 2 for 4', () => {
      primeFactorsOf(4).should.be.deepEqual([2, 2]);
    });
    it('return 2, 3 for 6', () => {
      primeFactorsOf(6).should.be.deepEqual([2, 3]);
    });

    it('return 2, 2, 2 for 8', () => {
      primeFactorsOf(8).should.be.deepEqual([2, 2, 2]);
    });

    it('return 3, 3 for 9', () => {
      primeFactorsOf(9).should.be.deepEqual([3, 3]);
    });

    it('return 2, 2, 3 for 12', () => {
      primeFactorsOf(12).should.be.deepEqual([2, 2, 3]);
    });

    it('throws "Illegal input"  when input is 0', () => {
      (() => primeFactorsOf(0)).should.throw('Illegal input');
    });
  });
});
