import React, { FC } from 'react';
import { StyledTable } from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export interface TableProps {
  columns?: [];
  dataSource?: [];
  rowSelection?: {
    type: 'checkbox' | 'radio';
    sortDirections?: 'descend' | 'ascend';
    sorter: (a, b) => void;
  };
}

const Table: FC<TableProps> = ({ columns, dataSource, rowSelection }) => {
  return (
    <StyledTable>
      <TableHeader columns={columns} rowSelection={rowSelection} />
      <TableBody
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
      />
    </StyledTable>
  );
};

export default Table;
