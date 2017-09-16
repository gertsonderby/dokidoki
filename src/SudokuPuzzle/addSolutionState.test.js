import expect from 'testHelpers/expect';
import addSolutionState from './addSolutionState';
import React from 'react';

const TestComponent = props => <div />;

describe('addSolutionState', () => {
  it('is a HOC adding state and setter for solution', () =>
    expect(addSolutionState, 'when called with', [
      TestComponent,
    ]).then(Component =>
      expect(
        <Component puzzle={['12.', '.5.', '8.9']} />,
        'to deeply render as',
        <TestComponent
          puzzle={['12.', '.5.', '8.9']}
          solution={[[1, 2, ''], ['', 5, ''], [8, '', 9]]}
          getCellSetter={expect.it('to be a function')}
        />,
      ),
    ));
});
