import expect from 'testHelpers/expect';
import React from 'react';
import SudokuPuzzle, { Wrapper } from './SudokuPuzzle';
import SudokuCell from 'SudokuCell';
import puzzles from 'puzzles';

describe('SudokuPuzzle', () => {
  it('is a component', () =>
    expect(
      <SudokuPuzzle puzzle={[]} solution={[]} />,
      'to render as',
      <Wrapper />,
    ));

  it('renders a puzzle', () => {
    return expect(
      <SudokuPuzzle
        puzzle={puzzles.easy}
        solution={[
          [5, 1, '', '', '', '', '', 8, 3],
          [8, '', '', 4, 1, 6, '', '', 5],
          ['', '', '', '', '', '', '', '', ''],
          ['', 9, 8, 5, '', 4, 6, 1, ''],
          ['', '', '', 9, '', 1, '', '', ''],
          ['', 6, 4, 2, '', 3, 5, 7, ''],
          ['', '', '', '', '', '', '', '', ''],
          [6, '', '', 1, 5, 7, '', '', 4],
          [7, 8, '', '', '', '', '', 9, 6],
        ]}
      />,
      'to exactly render as',
      <Wrapper>
        <SudokuCell staticValue={5} value={5} />
        <SudokuCell staticValue={1} value={1} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={8} value={8} />
        <SudokuCell staticValue={3} value={3} />

        <SudokuCell staticValue={8} value={8} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={4} value={4} />
        <SudokuCell staticValue={1} value={1} />
        <SudokuCell staticValue={6} value={6} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={5} value={5} />

        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />

        <SudokuCell value="" />
        <SudokuCell staticValue={9} value={9} />
        <SudokuCell staticValue={8} value={8} />
        <SudokuCell staticValue={5} value={5} />
        <SudokuCell value="" />
        <SudokuCell staticValue={4} value={4} />
        <SudokuCell staticValue={6} value={6} />
        <SudokuCell staticValue={1} value={1} />
        <SudokuCell value="" />

        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={9} value={9} />
        <SudokuCell value="" />
        <SudokuCell staticValue={1} value={1} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />

        <SudokuCell value="" />
        <SudokuCell staticValue={6} value={6} />
        <SudokuCell staticValue={4} value={4} />
        <SudokuCell staticValue={2} value={2} />
        <SudokuCell value="" />
        <SudokuCell staticValue={3} value={3} />
        <SudokuCell staticValue={5} value={5} />
        <SudokuCell staticValue={7} value={7} />
        <SudokuCell value="" />

        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />

        <SudokuCell staticValue={6} value={6} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={1} value={1} />
        <SudokuCell staticValue={5} value={5} />
        <SudokuCell staticValue={7} value={7} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={4} value={4} />

        <SudokuCell staticValue={7} value={7} />
        <SudokuCell staticValue={8} value={8} />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell value="" />
        <SudokuCell staticValue={9} value={9} />
        <SudokuCell staticValue={6} value={6} />
      </Wrapper>,
    );
  });
});
