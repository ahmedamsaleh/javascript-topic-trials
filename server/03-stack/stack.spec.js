import R from 'ramda';

describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = () => {
    let stack = [];
    let size = null;
    let capacity = null;

    return {
      isEmpty: () => {
        return (R.isNil(size));
      },

      push: (element) => {
        if (!R.isNil(capacity)){
          if (size + 1 <= capacity){
            stack = stack + [element];
            size = size + 1;
          } else {
            throw new Error('Error: Cannot exceed capacity');
          }
        } else {
          stack = stack + [element];
          size = size + 1;
        }
      },

      pop: (element) =>{
        stack = stack - [element];
        size = size - 1;
      },

      getSize: () => {
        return size;
      },

      setCapacity: (capNum) => {
        capacity = capNum;
      }

    };
  };


  describe('a stack should', () => {
    it('empty for newly created stack', () => {
      const stack = makeStack();
      stack.isEmpty().should.be.true();
    });

    it('not empty for pushing element onto stack', () => {
      const stack = makeStack();
      stack.push(1);
      stack.isEmpty().should.be.false();
    });

    it('size of 1 for pushing element onto newly created stack', () => {
      const stack = makeStack();
      stack.push(1);
      stack.getSize().should.equal(1);
    });

    it('empty for pushing and popping element onto and off of newly created stack', () => {
      const stack = makeStack();
      stack.push(1);
      stack.pop(1);
      stack.getSize().should.equal(0);
    });

    it('error for pushing element onto stack', () => {
      const stack = makeStack();
      stack.setCapacity(3);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      ( () => {
       stack.push(4);
      } ).should.throw('Error: Cannot exceed capacity');
    });
  });
});
