import {lineCount} from './line-count';
describe.only('line count can be checked', () => {
  it('with the done parameter like with a callback', (done) => {
    const successCallback = (numberOfLines) => {
      numberOfLines.should.be.equal(13);
      done();
    };

    lineCount('server/06-asynch-callbacks/line-count.js').then(successCallback);
  });

  it('in case of failure with the done parameter like with a callback', (done) => {
    const errorCallback = (error) => {
      error.message.should.be.equal('problem reading file: is-not-there.js');
      done();
    };

    lineCount('is-not-there.js').catch(errorCallback);
  });

  it('success by returning the promise after .then', () => {
    return lineCount('server/06-asynch-callbacks/line-count.js')
    .then((numberOfLines) => {
      numberOfLines.should.be.equal(13);
    });
  });

  it('failure by returning the promise after .catch', () => {
      return lineCount('is-not-there.js')
      .catch((error) => {
        error.message.should.be.equal('problem reading file: is-not-there.js');
      });
  });

  it('success by using eventually or fulfilledWith', () => {
      return lineCount('server/06-asynch-callbacks/line-count.js').should.be.eventually.equal(13);
  });

  it('failure by using rejectedWith', () => {
    return lineCount('is-not-there.js').should.be.rejectedWith('problem reading file: is-not-there.js');
  });
});
