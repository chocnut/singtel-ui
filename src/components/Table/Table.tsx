import React, { FC, useState } from 'react';
import ThemeProvider, { ThemeProviderProps } from '../../ThemeProvider';
import { StyledTable } from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export interface TableProps {
  columns?: [];
  dataSource?: [];
  rowSelection?: {
    type: 'checkbox' | 'radio';
    sorter: (a, b) => void;
  };
  theme?: ThemeProviderProps;
}

const Table: FC<TableProps> = ({
  columns,
  dataSource,
  rowSelection,
  theme,
}) => {
  const [data, setData] = useState();
  const [order, setOrder] = useState(false);
  const [sortTitle, setSortTitle] = useState();

  const onHandleSort = (e, item) => {
    e.preventDefault();
    const sortedDataSource = dataSource?.sort((a, b) =>
      item.sorter(a, b, order)
    );
    setData(sortedDataSource);
    setOrder(!order);
    setSortTitle(item.title);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTable>
        <TableHeader
          columns={columns}
          rowSelection={rowSelection}
          onHandleSort={onHandleSort}
          order={order}
          sortTitle={sortTitle}
        />
        <TableBody
          columns={columns}
          dataSource={data || dataSource}
          rowSelection={rowSelection}
        />
      </StyledTable>
    </ThemeProvider>
  );
};

export default Table;
