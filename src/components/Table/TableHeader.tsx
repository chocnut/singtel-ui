import React, { FC } from 'react';
import {
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderItem,
  TableHeaderItemText,
} from './styles';

export interface TableHeaderProps {
  columns: [];
}

const TableHeader: FC<TableHeaderProps> = ({ columns }) => (
  <TableHeaderContainer>
    <TableHeaderContent>
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
