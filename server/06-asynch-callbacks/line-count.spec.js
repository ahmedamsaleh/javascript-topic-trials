import {lineCount} from './line-count';

describe('line count', () => {
  it('for file —— line-count.js —— should be 13', done => {
    const successHandler = numberOfLines => {
      numberOfLines.should.equal(13);
      done();
    };

    lineCount('server/06-asynch-callbacks/line-count.js',
        null, successHandler);
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', done => {

    const errorHandler = message => {
      message.should.equal('problem reading file: is-not-there.js');
      done();
    };

    lineCount('is-not-there.js', errorHandler);
  });
});
