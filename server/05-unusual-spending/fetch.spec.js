/**
 * Created by jhtrujil on 4/5/2017.
 */
/*eslint dot-notation: "off"*/
import {replace, when, verify} from 'testdouble';

describe('canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
});

describe.only('fetch should', () => {
  it('interact with months and api', () => {
    //arrange
    const months = replace('./months');
    const apiWrapper = replace('./api-wrapper')['apiWrapper'];

    let fetch;

    let userId = 'dummy userId';
    let currentMonth = 'dummy currentMonth';
    let priorMonth = 'dummy priorMonth';
    let priorMonthsPayment = 'dummy priorMonthsPayment';
    let currentMonthsPayment = 'dummy currentMonthsPayment';

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(apiWrapper(userId, priorMonth)).thenReturn(priorMonthsPayment);
    when(apiWrapper(userId, currentMonth)).thenReturn(currentMonthsPayment);

    fetch = require('./fetch')['fetch'];

    //act and assert
    let payments = {
      current: {
        month: currentMonth,
        payments: currentMonthsPayment
      },

      prior: {
        month: priorMonth,
        payments: priorMonthsPayment
      }
    }

    fetch(userId).should.deepEqual(payments);

  });
});
