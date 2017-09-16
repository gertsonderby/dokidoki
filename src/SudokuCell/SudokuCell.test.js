import expect from 'testHelpers/expect';
import React from 'react';
import SudokuCell, { Box, StaticNumber, EditableNumber } from './SudokuCell';

describe('SudokuCell', () => {
  let onChange;
  beforeEach(() => {
    onChange = () => {};
  });
  it('renders a static value', () =>
    expect(
      <SudokuCell onChange={onChange} staticValue={8} />,
      'to render as',
      <Box>
        <StaticNumber>8</StaticNumber>
      </Box>,
    ));

  it('renders an input if no static value set', () =>
    expect(
      <SudokuCell onChange={onChange} staticValue={0} />,
      'to render as',
      <Box>
        <EditableNumber value="" onChange={onChange} />
      </Box>,
    ));

  it('renders an input with a value in it', () =>
    expect(
      <SudokuCell onChange={onChange} staticValue={0} value={4} />,
      'to render as',
      <Box>
        <EditableNumber value="4" onChange={onChange} />
      </Box>,
    ));

  it('renders an input differently if there is a conflict', () =>
    expect(
      <SudokuCell onChange={onChange} staticValue={0} value={4} conflict />,
      'to render as',
      <Box conflict>
        <EditableNumber value="4" onChange={onChange} />
      </Box>,
    ));
});
