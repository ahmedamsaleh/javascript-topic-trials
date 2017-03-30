/**
 * Created by jhtrujil on 3/24/2017.
 */

const makeStack = (capacity) => {
  let currentSize = 0;
  let pushedElements = [];

  if (capacity < 0) throw new Error('Illegal Capacity Error');

  return {
    isEmpty: () => currentSize === 0,
    size: () => currentSize,

    push: (element) => {
      if (currentSize === capacity) throw new Error('Overflow Error');
      currentSize++;
      pushedElements.push(element);
    },

    pop: () => {
      if (currentSize === 0) throw new Error('Underflow Error');
      currentSize--;
      return pushedElements.pop();
    }
  };
};

describe.only('a stack should', () => {
  let stack;

  beforeEach(() => {
    stack = makeStack(2);
  });

  it('be empty when created', () => {
    stack.isEmpty().should.be.true();
  });

  it('have a size of zero when created', () => {
    stack.size().should.equal(0);
  });

  it('have a size of one after a push', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('be empty after one push and pop', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('throw underflow error when popping an element off of stack and stack is empty', () => {
    ( () => {
      stack.pop();
    }).should.throw('Underflow Error');
  });

  it('throw overflow error when pushing an element onto stack and stack is at capacity', () => {
    ( () => {
      let stack2 = makeStack(2);
      stack2.push();
      stack2.push();
      stack2.push();
    } ).should.throw('Overflow Error');
  });

  it('return one after pushing one onto stack and performing a pop', () => {
    stack.push(1);
    stack.pop().should.equal(1);
  });

  it('return object after pushing it onto stack and performing a pop', () => {
    const value = {};
    stack.push(value);
    stack.pop().should.equal(value);
  });

  it('return two and one in that order after pushing one and two onto stack and performing pop twice', () => {
    stack.push(1);
    stack.push(2);
    stack.pop().should.equal(2);
    stack.pop().should.equal(1);
  });

  it('throw illegal capacity error when creating a stack with negative capacity', () => {
    ( () => {
      let stack3 = makeStack(-1);
    }).should.throw('Illegal Capacity Error');
  });
});
