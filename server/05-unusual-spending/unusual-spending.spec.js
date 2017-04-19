/*eslint dot-notation : off*/
import {R, replace, when, verify, reset} from '../../test-helper';

describe.only('unusual spending spec', () => {
  it('send email to the user', () => {
    //setup
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email').email;
    const userID = 'userId';
    const categorizedPayment = 'categorized payments';

    when(fetch(userID)).thenReturn('payments');
    when(categorize('payments')).thenReturn(categorizedPayment);
    //act
    let unusualSpending = require('./unusual-spending').unusualSpending;
    unusualSpending(userID);
    // verify
    verify(email(userID, categorizedPayment));
  });

  afterEach(()=>{
    reset();
  });
});

