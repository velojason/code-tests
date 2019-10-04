const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();

/*
 * Problem:
 * Imagine the cross-section of a tide pool that captures ocean water
 * when the tide recedes. You are given an array of non-negative
 * integers representing height of blocks where the width of each block
 * is 1. Compute how much water would be captured in between the blocks
 * after a high tide. Input constraints are 0 <= n <= integer_max.
 *
 */

/**
 * @param {array} blocks
 * @return {number}
 */
const tidepool = (blocks) => {
  let len = blocks.length;
  let leftWall = blocks[0];
  let rightWall = blocks[len - 1];

  // Find the amount of water from the left.
  const left = blocks.map((block) => {
    leftWall = Math.max(leftWall, block);
    
    if (leftWall > block) {
      return leftWall - block;
    }
    return 0;
  });

  // Find the amount of water from the right and return the
  // intersection of the right and left.
  return blocks.reduceRight((water, block, idx) => {
    rightWall = Math.max(rightWall, block);
    
    if (rightWall > block) {
      let puddle = rightWall - block;

      if (puddle > 0 && left[idx] > 0) {
        return water += Math.min(puddle, left[idx]);
      }
    }

    return water;
  }, 0);
}

// Test cases.
describe('The tidepool() function', () => {
  it('should return the correct value', () => {
    assert.equal(tidepool([2, 0, 2]), 2);
    assert.equal(tidepool([3, 0, 0, 2, 0, 4]), 10);
    assert.equal(tidepool([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
  });
});

