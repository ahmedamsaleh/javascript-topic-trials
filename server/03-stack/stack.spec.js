describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

   let stack;

   let createStack = (capacity = 5) => {
     if (capacity < 0) throw new Error('negative size');
      let queue = [];


      return {
        isEmpty: () => queue.length === 0,
        size: () => queue.length,
        push: (element) => {
          if (capacity === queue.length) throw new Error('overflow');
          queue.push(element);
        },
        pop: () => {
          if (queue.length === 0) throw new Error('underflow');
          return queue.pop();
        }
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
        stack.push();
        stack.push();
        stack.push();
        stack.push();
      }).should.throw('overflow');
    });

    it('underflow', () => {
      (() => {
          stack.pop();
      }).should.throw('underflow');
    });

    it('pop what was pushed', () => {
      stack.push(8);
      stack.pop().should.be.equal(8);
    });

    it('pop the two elements that were pushed', () => {
      stack.push(3);
      stack.push(4);
      stack.pop().should.be.equal(4);
      stack.pop().should.be.equal(3);
    });

    it('handle negative size', () => {
      ( () => {
        stack = createStack(-3);
      }).should.throw('negative size');
    });
  });
});
