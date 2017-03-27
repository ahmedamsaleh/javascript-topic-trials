describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactors = function () {
    return [];
  };

  describe.only('a prime factors function should return', () => {
    it('no prime factor for 1', () => {
      primeFactors(1).should.be.deepEqual([]);
    });

    it('2 for 2');
    it('3 for 3');
    it('2 ,2  for 4');
    it('5 for 5');
    it('2,3 for 6');
    it('2,2,2 for 8');
    it('3,3 for 9');
  });
});
