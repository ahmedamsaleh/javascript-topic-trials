/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe('the unusual spending spec', () => {
  it('shows the unusual spending works', () => {
    true.should.be.true();
  });

  describe('unusual spending', () => {
    it('should call fetch then categorize then email', () => {
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];
      const user_id = 'user-id';
      const payments = 'payments';
      const categorizedPayments = 'categorized-payments';

      let unusualSpending;

      when(fetch(user_id)).thenReturn(payments);
      when(categorize('payments')).thenReturn(categorizedPayments);

      unusualSpending = require('./unusual-spending')['unusualSpending'];
      unusualSpending(user_id);
      verify(email(user_id, categorizedPayments));

    });

    afterEach(() => {
      reset();
    });

  });
});
