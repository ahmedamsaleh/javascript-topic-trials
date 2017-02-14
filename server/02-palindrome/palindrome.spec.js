describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome() {
    return true;
  }

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });
    it('false for dude');
    it('true for mom dad mom');
    it('false for dude hi');
    it('true for whitespaces');
    it('error for empty');
    it('error for null');
    it('error for noInput');
  });
});
