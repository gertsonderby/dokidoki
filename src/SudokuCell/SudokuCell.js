import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Box = styled.div`
  border: 1px solid #666;
  margin-right: -1px;
  margin-bottom: -1px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${props => (props.conflict ? css`background-color: #ff6666;` : '')};
`;

export const StaticNumber = styled.span`font-family: 'Raleway', sans-serif;`;

export const EditableNumber = styled.input`
  width: 1em;
  border: 0 none;
  font-family: 'Permanent Marker', cursive;
  font-size: 1em;
  text-align: center;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
`;

const SudokuCell = ({ staticValue = 0, value = '', onChange, conflict }) => {
  const printValue =
    staticValue === 0 ? (
      <EditableNumber value={`${value}`} onChange={onChange} />
    ) : (
      <StaticNumber>{`${staticValue}`}</StaticNumber>
    );
  return <Box conflict={conflict}>{printValue}</Box>;
};

SudokuCell.propTypes = {
  staticValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default SudokuCell;
