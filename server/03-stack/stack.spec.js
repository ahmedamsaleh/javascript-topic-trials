describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('a stack should', () => {
    it('start with size 0');
    it('start empty');
    it('not be empty after push');
    it('have size of 1 after push');
    it('be empty after push then pop');
    it('have size of 0 after push then pop');

    it('throws "empty stack error" ');
    it('throws "full stack error" ');
    it('pop same element after pushing it');
    it('pop last 2 after pushing 3 times');
  });
});
