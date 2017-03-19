describe('the fahrenheit2celsius canary test', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = function (fahrenheitDegree) {
    return (fahrenheitDegree - 32) / 1.8;
  };

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('give 10°C for 50°F', () => {
      fahrenheit2celsius(50).should.equal(10);
    });
  });
});
