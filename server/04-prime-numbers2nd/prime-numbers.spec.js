/*eslint no-param-reassign: "off"*/

describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });


  function primeFactors(number) {
    let factors = [];
    let divisor = 2;
    while (number > 1) {
      for ( ; number % divisor === 0; number /= divisor) factors.push(divisor);
      divisor++;
    }
    return factors;
  }

  describe('a prime refactor function', () => {
    it('1 should return nothing', () => {
      primeFactors(1).should.be.deepEqual([]);
    });

    it('2 should return 2', () => {
      primeFactors(2).should.be.deepEqual([2]);
    });

    it('3 should return 3', () => {
      primeFactors(3).should.be.deepEqual([3]);
    });

    it('4 should return 2, 2', () => {
      primeFactors(4).should.be.deepEqual([2, 2]);
    });

    it('5 should return 5', () => {
      primeFactors(5).should.be.deepEqual([5]);
    });

    it('6 should return 2, 3', () => {
      primeFactors(6).should.be.deepEqual([2, 3]);
    });

    it('7 should return 7', () => {
      primeFactors(7).should.be.deepEqual([7]);
    });

    it('8 should return 2, 2, 2', () => {
      primeFactors(8).should.be.deepEqual([2, 2, 2]);
    });

    it('9 should return 3, 3', () => {
      primeFactors(9).should.be.deepEqual([3, 3]);
    });
    //
    // it('10 should return 2, 5', () => {
    //   primeFactors(10).should.be.deepEqual([2, 5]);
    // });
  });
});
