/**
 * Created by jhtrujil on 4/5/2017.
 */
/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from 'td';

describe.only('canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending should', () => {
    it('interact with fetch, categorize, and email', () => {
      // arrange
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];
      //act

      //assert
    });
    afterEach(() => {
      reset();
    });
  });
});


