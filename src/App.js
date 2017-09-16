import React, { Component } from 'react';
import SudokuPuzzle from 'SudokuPuzzle';
import styled from 'styled-components';
import puzzles from './puzzles';

export const AppWrapper = styled.div`display: flex;`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <SudokuPuzzle puzzle={puzzles.easy} />
      </div>
    );
  }
}

export default App;
