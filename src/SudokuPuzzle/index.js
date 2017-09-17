import PropTypes from 'prop-types';
import SudokuPuzzle from './SudokuPuzzle';
import addSolutionState from './addSolutionState';
import addConflictState from './addConflictState';
import addConflictDetector from './addConflictDetector';

const Puzzle = addConflictDetector(
  addConflictState(addSolutionState(SudokuPuzzle)),
);

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Puzzle;
