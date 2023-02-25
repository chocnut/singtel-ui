import React, { FC, useState } from 'react';
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
  const [data, setData] = useState();
  const [order, setOrder] = useState(false);

  const onHandleSort = (e, sorter) => {
    e.preventDefault();
    const sortedDataSource = dataSource?.sort((a, b) => sorter(a, b, order));
    setData(sortedDataSource);
    setOrder(!order);
  };

  return (
    <StyledTable>
      <TableHeader
        columns={columns}
        rowSelection={rowSelection}
        onHandleSort={onHandleSort}
      />
      <TableBody
        columns={columns}
        dataSource={data || dataSource}
        rowSelection={rowSelection}
      />
    </StyledTable>
  );
};

export default Table;
