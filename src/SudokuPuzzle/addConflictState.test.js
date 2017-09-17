import expect from 'testHelpers/expect';
import React from 'react';
import addConflictState from './addConflictState';

const TestComponent = props => <div />;

describe('addConflictState', () => {
  it('is a HOC', () =>
    expect(addConflictState, 'when called with', [
      TestComponent,
    ]).then(Component =>
      expect(
        <Component />,
        'to deeply render as',
        <TestComponent
          conflicts={{}}
          setConflict={expect
            .it('to be a function')
            .and('when called with', [1, 3, 1, 7])}
        />,
      ),
    ));
});
