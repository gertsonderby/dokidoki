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

const digitToCell = (digit, x, y, value, handler) => (
  <SudokuCell
    key={x + '_' + y}
    value={value}
    onChange={handler}
    staticValue={digit === '.' ? undefined : parseInt(digit, 10)}
  />
);

const createOnChangeHandler = updater => event => updater(event.target.value);

const SudokuPuzzle = ({ puzzle, solution, getCellSetter }) => (
  <Wrapper>
    {puzzle.map((line, y) =>
      line
        .split('')
        .map((digit, x) =>
          digitToCell(
            digit,
            x,
            y,
            solution[y][x],
            createOnChangeHandler(getCellSetter(x, y)),
          ),
        ),
    )}
  </Wrapper>
);

SudokuPuzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
  solution: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ).isRequired,
  getCellSetter: PropTypes.func.isRequired,
};

export default SudokuPuzzle;
