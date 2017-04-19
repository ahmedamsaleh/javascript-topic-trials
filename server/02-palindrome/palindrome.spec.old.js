describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function isWhiteSpacePhrase(phrase) {
    return phrase.trim().length === 0;
  }

  function reversePhrase(phrase) {
    return phrase.split('').reverse().join('');
  }

  function isPalindrome(phrase) {
    if (phrase === '') throw new Error('empty string error');
    if (typeof phrase === 'undefined') throw new Error('no argument error');
    if (typeof phrase !== 'string') throw new Error('bad argument error');
    if (isWhiteSpacePhrase(phrase)) throw new Error('non-well formed error');

    return phrase === reversePhrase(phrase);

  }

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });
    it('false for dude', () => {
      isPalindrome('dude').should.be.false();
    });
    it('true for mom dad mom', () => {
      isPalindrome('mom dad mom').should.be.true();
    });
    it('throws "empty string error" for empty string', () => {
      (() => isPalindrome('')).should.throw('empty string error');
    });
    it('throws "no argument error" when the parameter is undefined', () => {
      (() => isPalindrome()).should.throw('no argument error');
    });
    it('throws a "bad argument error" when the parameter is not a string', () => {
      (() => isPalindrome(34)).should.throw('bad argument error');
    });
    it('throws "non-well formed error" when the parameter is whitespaces', () => {
      (() => isPalindrome('   ')).should.throw('non-well formed error');
    });
  });
});
