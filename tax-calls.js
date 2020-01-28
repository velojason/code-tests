const tax = (transactions, taxRate) => {
  let numCalls = 0;

  const calculateCostAfterTax = (cost, taxRate) => {
    numCalls = numCalls + 1;
    return cost * taxRate;
  };

  const t = transactions.reduce((acc, curr) => {
    if(acc[curr]) {
      return acc;
    }
    return {
      [curr]: calculateCostAfterTax(curr, taxRate),
      ...acc
    }
  }, {});

  return numCalls;
};

// tax([10,5,10,5], 1.2)
