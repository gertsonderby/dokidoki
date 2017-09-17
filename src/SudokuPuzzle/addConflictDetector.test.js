import expect from 'testHelpers/expect';
import React from 'react';
import sinon from 'sinon';

import addConflictDetector, {
  hasConflict,
  hasSameXConflict,
  hasSameYConflict,
  hasSquareRegionConflict,
} from './addConflictDetector';

describe('hasConflict', () => {
  let addConflict,
    clearConflicts,
    goodSolution,
    badXSolution,
    badYSolution,
    badSquareSolution;
  beforeEach(() => {
    addConflict = sinon.spy().named('addConflict');
    clearConflicts = sinon.spy().named('clearConflicts');
    goodSolution = [
      [1, 6, 3, '', '', ''],
      [2, 4, 9, '', '', ''],
      [7, 5, 8, '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];
    badXSolution = [
      [1, 6, 3, '', '', ''],
      [2, 4, 9, '', '', ''],
      [7, 5, 8, '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', 4, '', '', '', ''],
    ];
    badYSolution = [
      [1, 6, 3, '', '', ''],
      [2, 4, 9, '', '', 4],
      [7, 5, 8, '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];
    badSquareSolution = [
      [4, 6, 3, '', '', ''],
      [2, 4, 9, '', '', ''],
      [7, 5, 8, '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];
  });

  it('checks if there are conflicts, finds none', () =>
    expect(hasConflict, 'when called with', [
      goodSolution,
      1,
      1,
      addConflict,
      clearConflicts,
    ]).then(() => {
      expect(addConflict, 'was not called');
      expect(clearConflicts, 'was called once');
    }));

  it('checks if there are conflicts, finds x collisions', () =>
    expect(hasConflict, 'when called with', [
      badXSolution,
      1,
      1,
      addConflict,
      clearConflicts,
    ]).then(() => {
      expect(addConflict, 'to have calls satisfying', [{ args: [1, 1, 1, 5] }]);
      expect(clearConflicts, 'was called once');
    }));

  it('checks if there are conflicts, finds y collisions', () =>
    expect(hasConflict, 'when called with', [
      badYSolution,
      1,
      1,
      addConflict,
      clearConflicts,
    ]).then(() => {
      expect(addConflict, 'to have calls satisfying', [{ args: [1, 1, 5, 1] }]);
      expect(clearConflicts, 'was called once');
    }));

  it('checks if there are conflicts, finds aquare collisions', () =>
    expect(hasConflict, 'when called with', [
      badSquareSolution,
      1,
      1,
      addConflict,
      clearConflicts,
    ]).then(() => {
      expect(addConflict, 'to have calls satisfying', [{ args: [1, 1, 0, 0] }]);
      expect(clearConflicts, 'was called once');
    }));
});

describe('hasSameXConflict', () => {
  let goodSolution, badSolution, veryBadSolution;
  beforeEach(() => {
    goodSolution = [[1, 6, 3], [2, 4, 9], [7, 5, 8]];
    badSolution = [[1, 4, 3], [2, 4, 9], [7, 5, 8]];
    veryBadSolution = [[1, 4, 3], [2, 4, 9], [7, 4, 8]];
  });

  it('checks if a single column has a conflict with the given cell, finds none', () =>
    expect(
      hasSameXConflict,
      'when called with',
      [goodSolution, 1, 1],
      'to equal',
      [],
    ));

  it('checks if a single column has a conflict with the given cell, finds one', () =>
    expect(
      hasSameXConflict,
      'when called with',
      [badSolution, 1, 1],
      'to equal',
      [[1, 0]],
    ));

  it('checks if a single column has a conflict with the given cell, finds two', () =>
    expect(
      hasSameXConflict,
      'when called with',
      [veryBadSolution, 1, 1],
      'to equal',
      [[1, 0], [1, 2]],
    ));
});

describe('hasSameYConflict', () => {
  let goodSolution, badSolution, veryBadSolution;
  beforeEach(() => {
    goodSolution = [[1, 6, 3], [2, 4, 9], [7, 5, 8]];
    badSolution = [[1, 6, 3], [4, 4, 9], [7, 5, 8]];
    veryBadSolution = [[1, 6, 3], [4, 4, 4], [7, 5, 8]];
  });

  it('checks if a single column has a conflict with the given cell, finds none', () =>
    expect(
      hasSameYConflict,
      'when called with',
      [goodSolution, 1, 1],
      'to equal',
      [],
    ));

  it('checks if a single column has a conflict with the given cell, finds one', () =>
    expect(
      hasSameYConflict,
      'when called with',
      [badSolution, 1, 1],
      'to equal',
      [[0, 1]],
    ));

  it('checks if a single column has a conflict with the given cell, finds two', () =>
    expect(
      hasSameYConflict,
      'when called with',
      [veryBadSolution, 1, 1],
      'to equal',
      [[0, 1], [2, 1]],
    ));
});

describe('hasSquareRegionConflict', () => {
  let goodSolution, badSolution, veryBadSolution;
  beforeEach(() => {
    goodSolution = [
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 7, 5, 8],
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 7, 5, 8],
    ];
    badSolution = [
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 7, 5, 8],
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 7, 5, 4],
    ];
    veryBadSolution = [
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 7, 5, 8],
      [1, 6, 3, 1, 6, 3],
      [2, 4, 9, 2, 4, 9],
      [7, 5, 8, 4, 5, 4],
    ];
  });

  it('checks if a single column has a conflict with the given cell, finds none', () =>
    expect(
      hasSquareRegionConflict,
      'when called with',
      [goodSolution, 1, 4],
      'to equal',
      [],
    ));

  it('checks if a single column has a conflict with the given cell, finds one', () =>
    expect(
      hasSquareRegionConflict,
      'when called with',
      [badSolution, 4, 4],
      'to equal',
      [[5, 5]],
    ));

  it('checks if a single column has a conflict with the given cell, finds one', () =>
    expect(
      hasSquareRegionConflict,
      'when called with',
      [veryBadSolution, 4, 4],
      'to equal',
      [[3, 5], [5, 5]],
    ));
});

const TestComponent = props => <div />;

describe('addConflictDetector', () => {
  it('is a HOC', () =>
    expect(addConflictDetector, 'to be a function')
      .and('when called with', [TestComponent])
      .then(Component =>
        expect(
          <Component />,
          'to deeply render as',
          <TestComponent hasConflict={expect.it('to be a function')} />,
        ),
      ));
});
