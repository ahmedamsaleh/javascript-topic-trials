describe('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', ()=>{
    true.should.be.true();
  });

  function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
  }

  describe('fahrenheitToCelsius should', () => {
    it('give 0°C for 32°F', ()=>{
      fahrenheitToCelsius(32).should.be.equal(0);
    });

    it('give 10°C for 50°F', ()=>{
      fahrenheitToCelsius(50).should.be.equal(10);
    });
  });
});
