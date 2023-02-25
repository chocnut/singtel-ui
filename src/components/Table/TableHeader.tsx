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
  dataSource?: [];
  onHandleSort?: (
    e: React.MouseEvent<HTMLButtonElement>,
    sorter: () => void
  ) => void;
  rowSelection: {
    type: 'checkbox' | 'radio';
  };
}

const TableHeader: FC<TableHeaderProps> = ({
  columns,
  rowSelection,
  onHandleSort,
}) => {
  return (
    <TableHeaderContainer>
      <TableHeaderContent>
        {rowSelection && <TableHeaderEmptyCell />}
        {columns.map((item: any, index: number) => {
          return (
            <>
              <TableHeaderItem key={index}>
                <TableHeaderItemText>{item.title}</TableHeaderItemText>
                {item.sorter ? (
                  <SortingButton onClick={e => onHandleSort?.(e, item.sorter)}>
                    <SortingDefaultIcon />
                  </SortingButton>
                ) : null}
              </TableHeaderItem>
            </>
          );
        })}
      </TableHeaderContent>
    </TableHeaderContainer>
  );
};

export default TableHeader;
