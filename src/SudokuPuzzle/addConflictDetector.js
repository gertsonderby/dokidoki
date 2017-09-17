import { withHandlers } from 'recompose';

export const hasConflict = (
  solution,
  x,
  y,
  addConflict,
  clearConflicts = () => console.log('argh'),
) => {
  clearConflicts(x, y);
  const xConflicts = hasSameXConflict(solution, x, y);
  const yConflicts = hasSameYConflict(solution, x, y);
  const squareConflicts = hasSquareRegionConflict(solution, x, y);
  const conflicts = xConflicts.concat(yConflicts, squareConflicts);
  conflicts.forEach(coords => addConflict(x, y, ...coords));
};

export const hasSameXConflict = (solution, x, y) => {
  const value = solution[y][x];
  const conflicts = [];
  if (value) {
    for (let i = 0; i < solution.length; i += 1) {
      if (i !== y && solution[i][x] === value) {
        conflicts.push([x, i]);
      }
    }
  }
  return conflicts;
};

export const hasSameYConflict = (solution, x, y) => {
  const value = solution[y][x];
  const conflicts = [];
  if (value) {
    const row = solution[y];
    for (let i = 0; i < row.length; i += 1) {
      if (i !== x && row[i] === value) {
        conflicts.push([i, y]);
      }
    }
  }
  return conflicts;
};

export const hasSquareRegionConflict = (solution, x, y) => {
  const value = solution[y][x];
  const baseX = Math.floor(x / 3) * 3;
  const baseY = Math.floor(y / 3) * 3;
  const conflicts = [];
  if (value) {
    for (let i = baseY; i < baseY + 3; i += 1) {
      for (let j = baseX; j < baseX + 3; j += 1) {
        if (i !== y && j !== x && solution[i][j] === value) {
          conflicts.push([j, i]);
        }
      }
    }
  }
  return conflicts;
};

const addConflictDetector = withHandlers({
  hasConflict: () => hasConflict,
});

export default addConflictDetector;
