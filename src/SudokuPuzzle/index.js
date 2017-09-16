import PropTypes from 'prop-types';
import SudokuPuzzle from './SudokuPuzzle';
import { compose, withState, withHandlers } from 'recompose';

const addSolutionState = compose(
  withState('solution', 'setSolution', ({ puzzle }) =>
    puzzle.map(line => line.split('').map(digit => parseInt(digit, 10) || '')),
  ),
  withHandlers({
    getCellSetter: ({ solution, setSolution }) => (x, y) => value => {
      solution[y][x] = value;
      setSolution(solution);
    },
  }),
);

const Puzzle = addSolutionState(SudokuPuzzle);

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Puzzle;
