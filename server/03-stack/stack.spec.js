describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

   let stack = {
     isEmpty: () => true
   };

  describe('a stack should', () => {
    it('be empty on create', () => {
      stack.isEmpty().should.be.true();
    });

    it('size one on push');
    it('not be empty on push');
    it('have size zero on push and pop');
    it('empty on push and pop');
    it('overflow');
    it('underflow');
    it('pop what was pushed');
    it('pop the two elements that were pushed');
    it('handle negative size');
  });
});
