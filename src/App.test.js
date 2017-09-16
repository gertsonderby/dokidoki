import expect from 'testHelpers/expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import App from 'App';
import SudokuPuzzle from 'SudokuPuzzle';
import puzzles from './puzzles';

it('renders without crashing', () => {
  const app = TestUtils.renderIntoDocument(<App />);
  return expect(
    app,
    'to have rendered',
    <SudokuPuzzle puzzle={puzzles.easy} />,
  );
});
