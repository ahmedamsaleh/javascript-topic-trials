/**
 * Created by jhtrujil on 5/1/2017.
 */

import {replace, when} from 'testdouble';

describe('canary test shows', () => {
  it('infrastructure works', () => {
    true.should.be.true();
  });
});

describe.only('fetch should', () => {
  it('call months and api and return payments', () => {
    //test doubles
    const months = replace('./months');
    const api = replace('./api')['api'];

    //stub data
    let priorMonth = 'dummy prior month';
    let currentMonth = 'dummy current month';
    let userId = 'userId';
    let priorMonthsPayments = 'prior months payments';
    let currentMonthsPayments = 'current months payments';

    //stub interactions
    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);
    when(api(userId, priorMonth)).thenReturn(priorMonthsPayments);
    when(api(userId, currentMonth)).thenReturn(currentMonthsPayments);

    //SUT
    let fetch = require('./fetch')['fetch'];

    //assert
    fetch(userId).should.deepEqual({
      current: {
        month: currentMonth,
        payments: currentMonthsPayments
      },

      prior: {
        month: priorMonth,
        payments: priorMonthsPayments
      }
    });
  });
});
