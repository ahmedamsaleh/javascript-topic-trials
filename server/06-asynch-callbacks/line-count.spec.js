import {lineCount} from './line-count';


describe.only('line count', () => {
  it('for file —— line-count.js —— should be 13', (done) => {
    function onSuccess(numberOfLines) {
      numberOfLines.should.equal(13);
      done();
    }
    lineCount('server/06-asynch-callbacks/line-count.js', null, onSuccess);
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', (done) => {
    function onError(errorMessage) {
      errorMessage.should.equal('problem reading file: is-not-there.js');
      done();
    }
    lineCount('is-not-there.js', onError, null);
  });
});
