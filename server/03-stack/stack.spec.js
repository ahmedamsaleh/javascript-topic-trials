describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

   let stack;

   let createStack = () => {
      let size = 0;
      let maximum = 1;

      return {
        isEmpty: () => size === 0,
        size: () => size,
        push: () => {
          if (maximum === size) throw new Error('overflow');
          size++;
        },
        pop: () => size--
      };
   };

  describe('a stack should', () => {
    beforeEach(() => {
      stack = createStack();
    });
    it('be empty on create', () => {
      stack.isEmpty().should.be.true();
    });

    it('size zero on create', () => {
      stack.size().should.be.equal(0);
    });

    it('not be empty on push', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });

    it('size one on push', () => {
      stack.push();
      stack.size().should.be.equal(1);
    });

    it('empty on push and pop', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('have size zero on push and pop', () => {
      stack.push();
      stack.pop();
      stack.size().should.be.equal(0);
    });

    it('overflow', () => {
      (() => {
        stack.push();
        stack.push();
      }).should.throw('overflow');
    });

    it('underflow');
    it('pop what was pushed');
    it('pop the two elements that were pushed');
    it('handle negative size');
  });
});
