import React, { FC, useState } from 'react';
import ThemeProvider, { mainTheme, ThemeProviderProps } from './ThemeProvider';
import { StyledTable } from './styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export interface Column {
  title: string;
  key: string;
  dataIndex: string;
  sorter?: (a: object, b: object) => number;
}

export interface TableProps {
  columns?: Array<Column>;
  dataSource?: object[];
  rowSelection?: {
    type: 'checkbox' | 'radio';
    sorter?: (a: object, b: object) => number;
  };
  theme?: ThemeProviderProps;
}

const Table: FC<TableProps> = ({
  columns = [],
  dataSource = [],
  rowSelection,
  theme = mainTheme,
}) => {
  const [data, setData] = useState<object[]>();
  const [order, setOrder] = useState(false);
  const [sortTitle, setSortTitle] = useState<string>();

  const showSelect = typeof rowSelection?.type === 'string';

  const onHandleSort = (item: Column) => {
    const sortedDataSource = dataSource?.sort(item?.sorter);
    setData(sortedDataSource);
    setOrder(!order);
    setSortTitle(item.title);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTable>
        <TableHeader
          columns={columns}
          showSelect={showSelect}
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
