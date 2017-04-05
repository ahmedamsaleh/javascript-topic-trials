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
    const months = replace('./months');
    const apiWrapper = replace('./api-wrapper')['apiWrapper'];

    let userId = 'dummy userId';
    let currentMonth = 'dummy currentMonth';
    let priorMonth = 'dummy priorMonth';
    let priorMonthPayment = 'dummy priorMonthPayment';
    let currentMonthPayment = 'dummy currentMonthPayment';

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(apiWrapper()).thenReturn(priorMonthPayment);
  });
});
