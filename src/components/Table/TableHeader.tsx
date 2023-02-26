import React, { FC } from 'react';
import useIsMobile from './hooks/useIsMobile';
import SortArrowIcon from './icons/SortArrowIcon';
import SortDefaultIcon from './icons/SortDefaultIcon';
import {
  SortingButton,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderEmptyCell,
  TableHeaderItem,
  TableHeaderItemText,
} from './styles';
import { Column } from './Table';

export interface TableHeaderProps {
  columns: Array<Column>;
  dataSource?: object[];
  onHandleSort: (item: Column) => void;
  showSelect: boolean;
  order: boolean;
  sortTitle?: string;
}

const TableHeader: FC<TableHeaderProps> = ({
  columns,
  showSelect,
  onHandleSort,
  order,
  sortTitle,
}) => {
  const isMobile = useIsMobile();

  const renderSortButton = (item: Column) => {
    return (
      <SortingButton onClick={() => onHandleSort(item)}>
        {sortTitle && sortTitle === item.title ? (
          <SortArrowIcon
            style={{ transform: order ? 'rotate(-180deg)' : 'none' }}
          />
        ) : (
          <SortDefaultIcon />
        )}
      </SortingButton>
    );
  };

  return (
    <TableHeaderContainer>
      <TableHeaderContent>
        {showSelect && <TableHeaderEmptyCell />}
        {isMobile ? (
          <TableHeaderItem>
            <TableHeaderItemText />
          </TableHeaderItem>
        ) : (
          columns?.map((item: Column, index: number) => {
            return (
              <TableHeaderItem key={index}>
                <TableHeaderItemText key={index}>
                  {item.title}
                </TableHeaderItemText>
                {item.sorter ? renderSortButton(item) : null}
              </TableHeaderItem>
            );
          })
        )}
      </TableHeaderContent>
    </TableHeaderContainer>
  );
};

export default TableHeader;
