describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let initialCapacity = 2;
  function Stack() {
    let size = 0;
    this.stack = new Array(initialCapacity);
    this.pop = function () {
      if (size === 0) throw new Error('Empty stack error');
      size = size - 1;
      return this.stack.pop();
    };
    this.push = function (element) {
      if (size < initialCapacity) {
        this.stack.push(element);
        size = size + 1;
      } else {
        throw new Error('Full stack error');
      }
    };
    this.getSize = function () {
      return size;
    };
    this.isEmpty = function () {
      return size === 0;
    };
  }

  let stack = new Stack(initialCapacity);

  describe('a stack should', () => {
    it('start with size 0', () => {
      (stack.size()).should.be.equal(0);
    });
    it('start empty', () => {
      (stack.isEmpty()).should.be.true();
    });
    it('not be empty after push', () => {
      stack.push(1);
      (stack.isEmpty()).should.be.false();
      stack.pop();
    });
    it('have size of 1 after push', () => {
      stack.push(1001);
      (stack.size()).should.be.equal(1);
      stack.pop();
    });
    it('be empty after push then pop', () => {
      stack.push('hi');
      stack.pop();
      (stack.isEmpty()).should.be.true();
    });
    it('have size of 0 after push then pop', ()=> {
      stack.push('hi');
      stack.pop();
      (stack.size()).should.be.equal(0);
    });

    it('throws "Empty stack error" ', ()=> {
      (()=>stack.pop()).should.throw('Empty stack error');
    });
    it('throws "Full stack error" ', ()=>{
      stack.push('stack');
      stack.push('is');
      (()=>stack.push('full')).should.throw('Full stack error');
      stack.pop();
      stack.pop();
    });
    it('pop same element after pushing it', ()=> {
      stack.push(345);
      (stack.pop()).should.be.equal(345);
      stack.push('OK');
      (stack.pop()).should.be.equal('OK');
    });
    it('pop last 2 after pushing 3 times', ()=> {
      initialCapacity = 3;
      stack.push('one');
      stack.push(2);
      stack.push('three');
      (stack.pop()).should.be.equal('three');
      (stack.pop()).should.be.equal(2);
      stack.pop();
    });
  });
});
