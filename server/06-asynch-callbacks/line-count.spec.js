import {lineCount} from './line-Count';

describe('line count', () => {
  it('for file —— line-count.js —— should be 13', (done) => {
    const successCallback = (numberOfLines) => {
      numberOfLines.should.be.equal(13);
      done();
    };

    lineCount('server/06-asynch-callbacks/line-count.js', null, successCallback);
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' + 'is-not-there.js', (done) => {

    const errorCallback = (errorMsg) => {
      errorMsg.should.be.equal('problem reading file: ' + 'is-not-there.js');
      done();
    };

    lineCount('is-not-there.js', errorCallback, null);
  });
});
