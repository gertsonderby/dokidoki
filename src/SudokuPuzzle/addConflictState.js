import { compose, withState, withHandlers } from 'recompose';

const toggleArrayElement = (array, element) => {
  let i = array.indexOf(element);
  if (i === -1) {
    array.push(element);
  } else {
    array.splice(i, 1);
  }
};

const addConflictState = compose(
  withState('conflicts', 'setAllConflicts', {}),
  withHandlers({
    setConflict: ({ conflicts, setAllConflicts }) => (x1, y1, x2, y2) => {
      const key1 = `${x1}_${y1}`;
      const key2 = `${x2}_${y2}`;
      const { [key1]: list1 = [], [key2]: list2 = [] } = conflicts;
      toggleArrayElement(list1, key2);
      toggleArrayElement(list2, key1);
      conflicts[key1] = list1;
      conflicts[key2] = list2;
      setAllConflicts(conflicts);
    },
    clearConflicts: ({ conflicts, setAllConflicts }) => (x, y) => {
      const key = `${x}_${y}`;
      (conflicts[key] || []).forEach(key2 => {
        toggleArrayElement(conflicts[key2], key);
        if (conflicts[key2].length === 0) {
          delete conflicts[key2];
        }
      });
      delete conflicts[key];
    },
  }),
);

export default addConflictState;
