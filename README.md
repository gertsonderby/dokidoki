# Dokidoki

A simple sudoku game.

## Setup

Clone the repository, `yarn install`, then run `yarn start` to start the web server and open a browser window with the game. (Using `npm` is also possible, and should not meet with significant problems.)

## Gameplay

Click any empty square and type a number from 1-9. Invalid values (letters, 0, etc.) will clear the cell. Conflicts will be highlighted. You win when the board is fully filled in and no conflicts are present.

## Tests

You can run the test suite using `yarn test`.

## Further expansion

Features that would be sensical to add
* A victory banner might show when the board is filled in and without conflicts along with a reset function.
* Key based navigation of the board, coupled with highlighting the selected box on the board.
* Switching between puzzles and/or generating new puzzles.
* Hookups for continuous integration and coverage tracking. Potentially continuous deployment.
