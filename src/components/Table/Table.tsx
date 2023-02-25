import React, { FC } from 'react';
import { StyledTable } from './styles';
import TableHeader from './TableHeader';

export interface TableProps {
  columns?: [];
}

const Table: FC<TableProps> = () => {
  return (
    <StyledTable>
      <TableHeader></TableHeader>
    </StyledTable>
  );
};

export default Table;
