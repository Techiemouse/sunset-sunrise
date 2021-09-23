var assert = require('assert');
//var sinon = require('sinon');
const exercise = require('../src/index.ts');


describe('Exercise', function() {

  describe('runExercise()', function() {
    it('should return correct result', function() {
      const result = exercise.runExercise();

      assert.deepEqual(result, 10);
    });

  });
  
});