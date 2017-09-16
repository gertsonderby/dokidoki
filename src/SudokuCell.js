import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Box = styled.div`
  border: 1px solid #666;
  margin-right: -1px;
  margin-bottom: -1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StaticNumber = styled.span`font-family: 'Raleway', sans-serif;`;

export const EditableNumber = styled.input`
  width: 1em;
  border: 0 none;
  font-family: 'Permanent Marker', cursive;
`;

const SudokuCell = ({ staticValue = 0, value = '' }) => {
  const printValue =
    staticValue === 0 ? (
      <EditableNumber value={`${value}`} />
    ) : (
      <StaticNumber>{`${staticValue}`}</StaticNumber>
    );
  return <Box>{printValue}</Box>;
};

SudokuCell.propTypes = {
  staticValue: PropTypes.number,
};

export default SudokuCell;
