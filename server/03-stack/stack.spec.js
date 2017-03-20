describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  let stack;

  const stackFactory = (size) => {
    if (size < 0) throw new Error('negative size error');
    let items = [];

    return {
      isEmpty: () => items.length === 0,

      push: (item) => {
        if (items.length === size) throw new Error('overflow');
        items.push(item);
      },

      pop: () => {
        if (items.length === 0) throw new Error('underflow');
        return items.pop();
      },

      size: () => items.length
    };
  };

  describe('a stack should', () => {
    beforeEach(() => {
      stack = stackFactory(5);
    });

    it('starts empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('is not empty', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });

    it('leaves stack size 1 when pushed', () => {
      stack.push();
      stack.size().should.be.equal(1);
    });

    it('leaves stack empty when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('overflows', () => {
      (() => {
        for (let i = 0; i < 6; i++) {
          stack.push();
        }
      }).should.throw('overflow');
    });

    it('underflows', () => {
      (() => {
        stack.pop();
      }).should.throw('underflow');
    });

    it('gets same one back when pushed then popped', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop().should.be.equal(3);
      stack.pop().should.be.equal(2);
      stack.pop().should.be.equal(1);
    });

    it('leaves stack empty when pushed twice and popped twice', () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('handles stack with negative size', () => {
      (() => {
        return new stackFactory(-1);
      }).should.throw('negative size error');
    });
  });
});
