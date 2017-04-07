import R from 'ramda';

  describe('the palindrome canary spec', () => {
    it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(phrase) {
    if (phrase === null){
      throw new Error('Null Input');
    }

    if (R.isNil(phrase)){
      throw new Error('No Input');
    }

    if (phrase.length === 0) {
      throw new Error('Empty String');
    }

    return (!phrase.localeCompare(phrase.split('').reverse().join('')));
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

    it('false for hello everyone', () => {
      isPalindrome('hello everyone').should.be.false();
    });

    it('true for whitespaces', () => {
      isPalindrome('  ').should.be.true();
    });

    it('error for empty', () => {
      ( () => {
        isPalindrome('');
      } ).should.throw('Empty String');
    });

    it('error for null', () => {
      ( () => {
        isPalindrome(null);
      } ).should.throw('Null Input');
    });

    it('error for noInput', () => {
      ( () => {
        isPalindrome();
      } ).should.throw('No Input');
    });
  });
});
