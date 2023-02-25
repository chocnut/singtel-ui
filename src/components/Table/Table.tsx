import React, { FC } from 'react';
import { StyledTable } from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export interface TableProps {
  columns?: [];
  dataSource?: [];
}

const Table: FC<TableProps> = ({ columns, dataSource }) => {
  return (
    <StyledTable>
      <TableHeader columns={columns} />
      <TableBody columns={columns} dataSource={dataSource} />
    </StyledTable>
  );
};

export default Table;
