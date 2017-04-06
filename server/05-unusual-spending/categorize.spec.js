import {categorize} from './categorize';

describe('categorize spec', () => {
  it('infrastructure work', () => {
    true.should.be.true();
  });

  describe('categorize should', () => {
    it('return categorize for payments exceed 150% of prior month cost', () => {
      const payments = {
        current: {
          payments: [
            {amount: 300, category: 'groceries'},
            {amount: 100, category: 'travel'},
            {amount: 500, category: 'electronics'}
            ]
        }, prior: {
          payments: [
            {amount: 50, category: 'groceries'},
            {amount: 80, category: 'travel'},
          ]
        }
      };

      const expectedCategorizedPayments = {
        current: {
          payments: [{amount: 300, category: 'groceries'}, {
            amount: 500, category: 'electronics'
          }]
        }, prior: {
          payments: [{amount: 50, category: 'groceries'}, {
            amount: 0, category: 'electronics'
          }]
        }
      };

      categorize(payments).should.be.deepEqual(expectedCategorizedPayments);
    });
  });
});
