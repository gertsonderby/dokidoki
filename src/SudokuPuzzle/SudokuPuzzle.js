import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SudokuCell from 'SudokuCell';

const boxSize = '2em';

export const Wrapper = styled.div`
  font-size: 20px;
  display: grid;
  grid-template-columns: ${boxSize} ${boxSize} ${boxSize} ${boxSize} ${boxSize}
    ${boxSize} ${boxSize} ${boxSize} ${boxSize};
  grid-template-rows: ${boxSize} ${boxSize} ${boxSize} ${boxSize} ${boxSize}
    ${boxSize} ${boxSize} ${boxSize} ${boxSize};
`;

const digitToCell = (digit, x, y, value) => (
  <SudokuCell
    key={x + '_' + y}
    value={value}
    staticValue={digit === '.' ? undefined : parseInt(digit, 10)}
  />
);

const SudokuPuzzle = ({ puzzle, solution }) => (
  <Wrapper>
    {puzzle.map((line, y) =>
      line
        .split('')
        .map((digit, x) => digitToCell(digit, x, y, solution[y][x])),
    )}
  </Wrapper>
);

SudokuPuzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SudokuPuzzle;
