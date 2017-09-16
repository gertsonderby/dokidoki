import { compose, withState, withHandlers } from 'recompose';

const addSolutionState = compose(
  withState('solution', 'setSolution', ({ puzzle }) =>
    puzzle.map(line => line.split('').map(digit => parseInt(digit, 10) || '')),
  ),
  withHandlers({
    getCellSetter: ({ solution, setSolution }) => (x, y) => value => {
      solution[y][x] = parseInt(value, 10) || '';
      setSolution(solution);
    },
  }),
);

export default addSolutionState;
