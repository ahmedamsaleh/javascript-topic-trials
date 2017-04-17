import {lineCount} from './line-count';

describe('line count can be checked', () => {
  it('with the done parameter like with a callback', (done) => {
    function onSuccess(numberOfLines) {
      numberOfLines.should.equal(14);
      done();
    }

    lineCount('server/07-asynch-promises/line-count.js').then(onSuccess);
  });

  //does not return
  it('by returning the promise after .then', () => {
    function onSuccess(numberOfLines) {
      numberOfLines.should.equal(14);
    }
    return lineCount('server/07-asynch-promises/line-count.js').then(onSuccess);
  });

  //return
  it('by using eventually or fulfilledWith', () => {
    return lineCount('server/07-asynch-promises/line-count.js').should.eventually.equal(14);
  });
});
