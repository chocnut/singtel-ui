import React, { FC } from 'react';
import {
  SortingButton,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderEmptyCell,
  TableHeaderItem,
  TableHeaderItemText,
} from './styles';
import SortingDefaultIcon from './icons/SortingDefaultIcon';

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
          <>
            <TableHeaderItem key={index}>
              <TableHeaderItemText>{item.title}</TableHeaderItemText>
              <SortingButton>
                <SortingDefaultIcon />
              </SortingButton>
            </TableHeaderItem>
          </>
        );
      })}
    </TableHeaderContent>
  </TableHeaderContainer>
);

export default TableHeader;
