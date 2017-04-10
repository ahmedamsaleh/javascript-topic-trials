import {lineCount} from './line-count';

describe.only('line count can be checked', () => {
  it('with the done parameter like with a callback', (done) => {
    function onSuccess(numberOfLines) {
      numberOfLines.should.equal(14);
      done();
    }

    lineCount('server/07-asynch-promises/line-count.js').then(onSuccess);
  });

  it('by returning the promise after .then');

  it('by using eventually or fulfilledWith');
});
