import expect from 'testHelpers/expect';
import React from 'react';
import SudokuCell, { Box, StaticNumber, EditableNumber } from './SudokuCell';

describe('SudokuCell', () => {
  it('renders a static value', () =>
    expect(
      <SudokuCell staticValue={8} />,
      'to render as',
      <Box>
        <StaticNumber>8</StaticNumber>
      </Box>,
    ));

  it('renders an input if no static value set', () =>
    expect(
      <SudokuCell staticValue={0} />,
      'to render as',
      <Box>
        <EditableNumber value="" />
      </Box>,
    ));

  it('renders an input if no value set', () =>
    expect(
      <SudokuCell staticValue={0} value={4} />,
      'to render as',
      <Box>
        <EditableNumber value="4" />
      </Box>,
    ));
});
