describe('Palindrom spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();

  });

  function IsPalindrome(phrase) {
    let reversed_phrase = phrase.split('').reverse().join('');
    return phrase === reversed_phrase;
  }

  describe('Palindrome should', () => {
    it('true for mom', () => {
      IsPalindrome('mom').should.be.true();
    });



    it('false for abc', () => {
      IsPalindrome('abc').should.be.false();
    });

    it('true for mom mom', () => {
      IsPalindrome('mom mom').should.be.true();
    });

    it('false for I go to work');
    it('true for I go to work');
    it('true mom ');
    it('true mm');
    it('error null');
  });
});
