/**
 * Created by jhtrujil on 3/24/2017.
 */

const makeStack = () => {
  return {
    isEmpty: () => true,
    size: () => 0,
    push: () => {}
  };
};

describe.only('a stack should', () => {
  let stack;

  beforeEach(() => {
    stack = makeStack();
  });

  it('be empty when created', () => {
    stack.isEmpty().should.be.true();
  });

  it('have a size of zero when created', () => {
    stack.size().should.equal(0);
  });

  // it('have a size of one after a push', () => {
  //   stack.push();
  //   stack.size().should.equal(1);
  // });

  it('be empty after one push and pop');
  it('throw overflow error when pushing an element onto stack and stack is at capacity');
  it('throw underflow error when popping an element off of stack and stack is empty');
  it('return one after pushing one onto stack and performing a pop');
  it('return two and one in that order after pushing one and two onto stack and performing pop twice');
  it('throw illegal capacity error when creating a stack with negative capacity');
});
