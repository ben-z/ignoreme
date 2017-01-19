'use strict';

/**
 * Call fnToRun after numCalls has called `done`.
 * @param {number} totalNumCalls total number of calls until fnToRun is executed
 * @param {Function} fnToRun the function to be executed
 */
module.exports = function runAfter(totalNumCalls, fnToRun) {
  let currentCalls = 0;
  return function done() {
    ++currentCalls;
    if (currentCalls === totalNumCalls) {
      fnToRun();
    }
  };
};
