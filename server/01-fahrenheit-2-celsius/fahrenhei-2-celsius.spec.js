describe.only('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function fahrenheit2celsius() {
    return 0;
  }

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () =>{
      fahrenheit2celsius(32).should.equal(0);
    });
    it('give 10°C for 50°F');
  });
});
