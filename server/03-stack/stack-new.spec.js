let createStack = (aCapacity) => {
  let currentSize = 0;
  let stack = [];
  return {
    size: () => currentSize,
    isEmpty: () => (currentSize === 0),
    push: (element) => {
      if (currentSize === aCapacity) throw new Error('Full stack error');
      stack.push(element);
      currentSize = currentSize + 1;
    },
    pop: () => {
      if (currentSize === 0) throw new Error('Empty stack error');
      currentSize = currentSize - 1;
      return stack.pop();
    }
  };
};


describe('the stack spec', () => {
  let stack;
  beforeEach(() => {
    stack = createStack(2);
  });

  it('start with size 0', ()=> {
    stack.size().should.be.equal(0);
  });

  it('start empty', ()=> {
    stack.isEmpty().should.be.true();
  });

  it('not be empty after push', ()=> {
    stack.push(1);
    stack.isEmpty().should.be.false();
  });

  it('have size of 1 after push', ()=> {
    stack.push(2);
    stack.size().should.be.equal(1);
  });

  it('be empty after push then pop', ()=> {
    stack.push('test 3');
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('have size of 0 after push then pop', ()=> {
    stack.push('test 4');
    stack.pop();
    stack.size().should.be.equal(0);
  });

  it('throws "Empty stack error" ', ()=> {
    (()=> stack.pop()).should.throw('Empty stack error');
  });

  it('throws "Full stack error" ', ()=> {
    stack.push(1);
    stack.push(2);
    (()=> stack.push(3)).should.throw('Full stack error');
  });

  it('pop same element after pushing it', ()=> {
    stack.push(1);
    stack.pop().should.be.equal(1);
  });
  it('pop last 2 after pushing 3 times', ()=> {
    stack = createStack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop().should.be.equal(3);
    stack.pop().should.be.equal(2);
  });
});
