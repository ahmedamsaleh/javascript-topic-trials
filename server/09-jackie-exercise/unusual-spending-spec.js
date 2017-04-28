/**
 * Created by jhtrujil on 4/28/2017.
 */

import {replace, when, verify} from 'testdouble';

describe('canary test should', () => {
  it('verifies the infrastructure is working', () => {
    true.should.be.true();
  });
})

describe.only('unusual spending should', () => {
  it('interact with fetch, categorize and email', () => {
    //test doubles
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    //stub
    const userId = 'dummy userId';
    const payments = 'dummy payments';
    const categorizedPayments = 'dummy categorizedPayments';

    //SUT
    let unusualSpending;
    unusualSpending = require('./unusual-spending')['unusualSpending'];

    //stub interactions
    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    //act
    unusualSpending(userId);

    //verify
    verify(email(userId, categorizedPayments));
  });
})
