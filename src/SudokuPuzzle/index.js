import PropTypes from 'prop-types';
import SudokuPuzzle from './SudokuPuzzle';
import addSolutionState from './addSolutionState';

const Puzzle = addSolutionState(SudokuPuzzle);

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Puzzle;
