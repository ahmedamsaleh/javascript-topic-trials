/*eslint no-param-reassign: "off"*/

describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactors = (number) => {
    let factors = [];
    let divisor = 2;

    while (number > 1) {
      for (; number % divisor === 0; number = number / divisor) factors.push(divisor);
      divisor++;
    }

    return factors;
  };

  describe('a prime factors function should', () => {
    it('return none for 1', () => {
      primeFactors(1).should.deepEqual([]);
    });

    it('return 2 for 2', () => {
      primeFactors(2).should.deepEqual([2]);
    });

    it('return 3 for 3', () => {
      primeFactors(3).should.deepEqual([3]);
    });

    it('return 2 and 2 for 4', () => {
      primeFactors(4).should.deepEqual([2, 2]);
    });

    it('return 5 for 5', () => {
      primeFactors(5).should.deepEqual([5]);
    });

    it('return 2 and 3 for 6', () => {
      primeFactors(6).should.deepEqual([2, 3]);
    });

    it('return 7 for 7', () => {
      primeFactors(7).should.deepEqual([7]);
    });

    it('return 2 and 2 and 2 for 8', () => {
      primeFactors(8).should.deepEqual([2, 2, 2]);
    });

    it('return 3 and 3 for 9', () => {
      primeFactors(9).should.deepEqual([3, 3]);
    });
  });
});
