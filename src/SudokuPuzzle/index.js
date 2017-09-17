import PropTypes from 'prop-types';
import SudokuPuzzle from './SudokuPuzzle';
import addSolutionState from './addSolutionState';
import addConflictState from './addConflictState';

const Puzzle = addSolutionState(addConflictState(SudokuPuzzle));

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Puzzle;
