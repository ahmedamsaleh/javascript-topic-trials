/*eslint no-param-reassign: "off"*/

describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactors = (number) => {
    let factors = [];
    if (number > 1) {
      for ( ; number % 2 === 0; number /= 2 ){
        factors.push(2);
      }
      for ( ; number % 3 === 0; number /= 3 ){
        factors.push(3);
      }
    }
    if (number > 1 ) {
      factors.push(number);
    }
    return factors;
  };

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
    it('10 should return 2, 5');
  });
});
