describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('palindrome should', () => {
    function validateInput(phrase) {
      if (phrase === null || typeof phrase === 'undefined') {
        throw new Error('invalid input');
      }
    }


    function palindrome(phrase) {
      validateInput(phrase);
      let word = phrase.replace(/ /g, '').toLowerCase();

      if (word === '') {
        return false;
      } else {
        let reverse = word.split('').reverse().join('');
        return reverse === word;
      }
    }

    it('return true for mom', () => {
      palindrome('mom').should.be.true();
    });

    it('return true for mom dad mom dad mom', () => {
      palindrome('mom dad mom dad mom').should.be.true();
    });

    it('return false for dude', () => {
      palindrome('dude').should.be.false();
    });

    it('return false for empty string', () => {
      palindrome('').should.be.false();
    });

    it('return false for white spaces', () => {
      palindrome('  ').should.be.false();
    });

    it('return  invalid input error for null', () => {
      (() => {
        palindrome(null);
      }).should.throw('invalid input');
    });

    it('return  invalid input error for not passing anything', () => {
      (() => {
        palindrome();
      }).should.throw('invalid input');
    });

    it('ingore white spaces and uppercase', () => {
      palindrome('Mom').should.be.true();
      palindrome('M   om').should.be.true();
    });
  });
});
