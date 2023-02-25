import React, { FC } from 'react';
import {
  InputRadio,
  SelectionContainer,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderEmptyCell,
  TableHeaderItem,
  TableHeaderItemText,
} from './styles';

export interface TableHeaderProps {
  columns: [];
  rowSelection: {
    type: 'checkbox' | 'radio';
  };
}

const TableHeader: FC<TableHeaderProps> = ({ columns, rowSelection }) => (
  <TableHeaderContainer>
    <TableHeaderContent>
      {rowSelection && <TableHeaderEmptyCell />}
      {columns.map((item: any, index: number) => {
        return (
          <TableHeaderItem key={index}>
            <TableHeaderItemText>{item.title}</TableHeaderItemText>
          </TableHeaderItem>
        );
      })}
    </TableHeaderContent>
  </TableHeaderContainer>
);

export default TableHeader;
