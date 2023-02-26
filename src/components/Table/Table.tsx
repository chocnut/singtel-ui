import React, { FC, useState } from 'react';
import ThemeProvider, { mainTheme, ThemeProviderProps } from './ThemeProvider';
import { StyledTable } from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export interface Column {
  title: string;
  key: string;
  dataIndex: string;
  sorter?: (
    a: object | undefined,
    b: object | undefined,
    order: boolean
  ) => number;
}

export interface TableProps {
  columns?: Array<Column>;
  dataSource?: object[];
  rowSelection?: {
    type: 'checkbox' | 'radio';
    sorter: (a: unknown, b: unknown) => void;
  };
  theme?: ThemeProviderProps;
}

const Table: FC<TableProps> = ({
  columns,
  dataSource,
  rowSelection,
  theme = mainTheme,
}) => {
  const [data, setData] = useState();
  const [order, setOrder] = useState(false);
  const [sortTitle, setSortTitle] = useState();

  const onHandleSort = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: Column
  ) => {
    e.preventDefault();
    const sortedDataSource = dataSource?.sort((a, b) =>
      item?.sorter(a, b, order)
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
