import expect from 'testHelpers/expect';
import React from 'react';
import SudokuPuzzle, { Wrapper } from './SudokuPuzzle';
import SudokuCell from 'SudokuCell';
import puzzles from 'puzzles';

describe('SudokuPuzzle', () => {
  it('is a component', () =>
    expect(<SudokuPuzzle puzzle={[]} />, 'to render as', <Wrapper />));

  it('renders a puzzle', () => {
    return expect(
      <SudokuPuzzle puzzle={puzzles.easy} />,
      'to exactly render as',
      <Wrapper>
        <SudokuCell staticValue={5} />
        <SudokuCell staticValue={1} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={8} />
        <SudokuCell staticValue={3} />

        <SudokuCell staticValue={8} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={4} />
        <SudokuCell staticValue={1} />
        <SudokuCell staticValue={6} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={5} />

        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />

        <SudokuCell />
        <SudokuCell staticValue={9} />
        <SudokuCell staticValue={8} />
        <SudokuCell staticValue={5} />
        <SudokuCell />
        <SudokuCell staticValue={4} />
        <SudokuCell staticValue={6} />
        <SudokuCell staticValue={1} />
        <SudokuCell />

        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={9} />
        <SudokuCell />
        <SudokuCell staticValue={1} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />

        <SudokuCell />
        <SudokuCell staticValue={6} />
        <SudokuCell staticValue={4} />
        <SudokuCell staticValue={2} />
        <SudokuCell />
        <SudokuCell staticValue={3} />
        <SudokuCell staticValue={5} />
        <SudokuCell staticValue={7} />
        <SudokuCell />

        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />

        <SudokuCell staticValue={6} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={1} />
        <SudokuCell staticValue={5} />
        <SudokuCell staticValue={7} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={4} />

        <SudokuCell staticValue={7} />
        <SudokuCell staticValue={8} />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell />
        <SudokuCell staticValue={9} />
        <SudokuCell staticValue={6} />
      </Wrapper>,
    );
  });
});
