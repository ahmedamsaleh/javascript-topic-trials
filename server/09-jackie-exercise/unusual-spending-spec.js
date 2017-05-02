/**
 * Created by jhtrujil on 4/28/2017.
 */

import {replace, when, verify, reset} from 'testdouble';


describe('canary test should', () => {
  it('verifies the infrastructure is working', () => {
    true.should.be.true();
  });
});

describe('unusual spending should', () => {
  it('interact with fetch, categorize and email', () => {
    //test doubles
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    //stub
    const userId = 'dummy userId';
    const payments = 'dummy payments';
    const categorizedPayments = 'dummy categorizedPayments';

    //SUT
    let unusualSpending;
    unusualSpending = require('./unusual-spending').unusualSpending;

    //stub interactions
    when(fetch(userId)).thenResolve(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    //act
    function onSuccess () {
      verify(email(userId, categorizedPayments));
    };

    return unusualSpending(userId).then(onSuccess);
  });

  it('return error', () => {
    //test doubles
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    //dummy data
    const userId = 'dummy userId';
    const dummyError = new Error('Unable to fetch payments');

    //SUT
    let unusualSpending;
    unusualSpending = require('./unusual-spending').unusualSpending;

    //stub interactions
    when(fetch(userId)).thenReject(dummyError);

    return unusualSpending(userId).catch((error) => {
      error.should.equal(dummyError);
    });
  });

  afterEach(() => {
    reset();
  });
});
