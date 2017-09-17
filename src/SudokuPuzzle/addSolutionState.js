import { compose, withState, withHandlers } from 'recompose';

const addSolutionState = compose(
  withState('solution', 'setSolution', ({ puzzle }) =>
    puzzle.map(line => line.split('').map(digit => parseInt(digit, 10) || '')),
  ),
  withHandlers({
    getCellSetter: ({
      solution,
      setSolution,
      hasConflict = () => {},
      setConflict = () => {},
      clearConflicts = () => {},
    }) => (x, y) => value => {
      solution[y][x] = value ? parseInt(value.slice(-1), 10) : '';
      setSolution(solution);
      hasConflict(solution, x, y, setConflict, clearConflicts);
    },
  }),
);

export default addSolutionState;
