/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe.only('the unusual spending spec', () => {
  it('shows the unusual spending works', () => {
    true.should.be.true();
  });

  describe('unusual spending', () => {
    it('should call fetch then categorize then email', () => {
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];

      let unusualSpending;

      when(fetch('user id')).thenReturn('payments');
      when(categorize('payments')).thenReturn('categorized payments');

      unusualSpending = require('./unusual-spending').unusualSpending;
      unusualSpending('user-id');
      verify(email('user-id', 'categorized-payments'));

    });

    afterEach(() => {
      reset();
    });

  });
});
