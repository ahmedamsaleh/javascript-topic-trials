describe('the fahrenheit2celsius canary test', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = function () {
    return 0;
  };

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('give 10°C for 50°F');
  });
});
