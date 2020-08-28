import React from 'react';
import * as CSS from 'csstype';

interface ExampleCellProps {
  value?: string;
}

const createStyle = (): CSS.Properties => {
  return {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
};

const ExampleCell = ({ value }: ExampleCellProps) => {
  return (
    <div style={{ height: '100%' }}>
      <span style={createStyle()}>{value}</span>
      <span style={createStyle()}>Buttom value</span>
    </div>
  );
};

export default ExampleCell;
