describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactors = () => {
    return [];
  };

  describe.only('a prime factors function should', () => {
    it('return none for 1', () => {
      primeFactors(1).should.deepEqual([]);
    });

    it('return 2 for 2');
    it('return 3 for 3');
    it('return 2 and 2 for 4');
    it('return 5 for 5');
    it('return 2 and 3 for 6');
    it('return 7 for 7');
    it('return 2 and 2 and 2 for 8');
    it('return 3 and 3 for 9');
  });
});
