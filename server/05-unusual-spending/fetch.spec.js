/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe('the fetch spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('test fetch', () => {
    it('get prior and current payments when fetch calls month and payment API', () => {
      const months = replace('./months');
      const api = replace('./api')['api'];

      when(months.prior()).thenReturn('prior');
      when(months.current()).thenReturn('current');
      when(api('user-id', 'prior')).thenReturn('prior payments');
      when(api('user-id', 'current')).thenReturn('current payments');

      let fetch = require('./fetch')['fetch'];
      fetch('user-id').should.deepEqual({
        current: {month: 'current', payments: 'current payments'},
        prior: {month: 'prior', payments: 'prior payments'}
      });
    });
  });

});
