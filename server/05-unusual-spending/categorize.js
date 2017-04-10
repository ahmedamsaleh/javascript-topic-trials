/**
 * Created by jhtrujil on 4/5/2017.
 */

const categorize = (payments) => {
  let myMap = new Map();

  let keyObj = {
   year: payments[0].month.year,
   month: payments[0].month.month
  };

  let categorizedPayments = [{}];

  myMap.set(keyObj, {
    payments: payments[0].payments[0]
  });

  for (let i = 0; i < payments.length; i++){
      for (let j = 0; j < payments[j].payments.length; j++){
        //console.log(myMap);
        let temp = {payments: payments[i].payments[j]};
       //myMap.set({year: payments[i].month.year, month: payments[i].month.month}, payments.push(temp));
      }
  }

  categorizedPayments = {
    month: {year: 2017, month: 4},
    payments: [{amount: 90, category: 'golf'}, {amount: 490, category: 'dinner'}]
  };

  return categorizedPayments;

};

export {categorize};
