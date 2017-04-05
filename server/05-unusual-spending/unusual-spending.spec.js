/**
 * Created by jhtrujil on 4/5/2017.
 */
/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from 'testdouble';

describe('canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending should', () => {
    it('interact with fetch, categorize, and email', () => {
      // arrange
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];

      let unusualSpending;

      let payments = 'dummy payments';
      let userId = 'dummy userId';
      let categorizedPayments = 'dummy categorizedPayments';

      when(fetch(userId)).thenReturn(payments);
      when(categorize(payments)).thenReturn(categorizedPayments);

      unusualSpending = require('./unusual-spending')['unusualSpending'];

      //act
      unusualSpending(userId);

      //assert
      verify(email(userId, categorizedPayments));
    });
    afterEach(() => {
      reset();
    });
  });
});


