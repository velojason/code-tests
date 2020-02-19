/*
 * Fix the following function so that repeated values
 * in the transactions array are only calculated one
 * time.
 */

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

// Using Map()
const taxMap = (transactions, taxRate) => {
  let numCalls = 0;

  const calculateCostAfterTax = (cost, taxRate) => {
    numCalls = numCalls + 1;
    return cost * taxRate;
  };

  const t = transactions.reduce((acc, curr) => {
    if(acc.has(curr)) {
      return acc;
    }
    acc.set(curr, calculateCostAfterTax(curr, taxRate));
    return acc;
  }, new Map());

  return numCalls;
};

// Or:
const taxSet = (transactions, taxRate) => {
  let numCalls = 0;
  const s = new Set(transactions);
  // const t = [...new Set(transactions)].map((x) => {
  const t = Array.from(s).map((x) => {
    numCalls += 1;
    return x * taxRate
  });
  return numCalls;
}

// Using Map()
const taxSetMap = (transactions, taxRate) => {
  let numCalls = 0;
  const t = new Map([...new Set(transactions)].map((x) => {
    numCalls += 1;
    return [x, x * taxRate];
  }));
  return numCalls;
}

tax([10,5,10,5], 1.2)
tax([1,2,3,4,5,6,6,5,4,3,10,30,30,31,23,10,5,10,5], 1.2)
