import expect from 'testHelpers/expect';
import React from 'react';
import SudokuPuzzle, { Wrapper } from './SudokuPuzzle';
import SudokuCell from 'SudokuCell';
import puzzles from 'puzzles';

describe('SudokuPuzzle', () => {
  it('is a component', () =>
    expect(
      <SudokuPuzzle puzzle={[]} solution={[]} getCellSetter={() => {}} />,
      'to render as',
      <Wrapper />,
    ));

  it('renders a puzzle', () => {
    return expect(
      <SudokuPuzzle
        puzzle={puzzles.easy.slice(0, 3)}
        solution={[
          [5, 1, '', '', '', '', '', 8, 3],
          [8, '', '', 4, 1, 6, '', '', 5],
          ['', '', '', '', '', '', '', '', ''],
        ]}
        getCellSetter={() => () => {}}
      />,
      'to exactly render as',
      <Wrapper>
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={5}
          value={5}
        />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={1}
          value={1}
        />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={8}
          value={8}
        />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={3}
          value={3}
        />

        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={8}
          value={8}
        />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={4}
          value={4}
        />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={1}
          value={1}
        />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={6}
          value={6}
        />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell
          onChange={expect.it('to be a function')}
          staticValue={5}
          value={5}
        />

        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
        <SudokuCell onChange={expect.it('to be a function')} value="" />
      </Wrapper>,
    );
  });
});
