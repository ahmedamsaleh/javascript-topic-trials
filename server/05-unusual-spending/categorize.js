const categorize = (payments) => {
  let categorizedPayments = {
    current: {payments: []},
    prior: {payments: []},
  };
  for (let i = 0; i < payments.current.payments.length; i++){
    for (let x = 0; x < payments.prior.payments.length; x++){
        if (payments.current.payments[i].category === payments.prior.payments[x].category && payments.current.payments[i].amount >= payments.prior.payments[x].amount * 1.5){
          categorizedPayments.current.payments.push(payments.current.payments[i]);
          categorizedPayments.prior.payments.push(payments.prior.payments[x]);
          break;
        }
    }
    if (i > categorizedPayments.current.payments.length){
      categorizedPayments.current.payments.push(payments.current.payments[i]);
      categorizedPayments.prior.payments.push({amount: 0, category: payments.current.payments[i].category});
    }
  }
  return categorizedPayments;
};
export {categorize};
