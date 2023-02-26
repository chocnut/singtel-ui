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
  onHandleSort?: (
    e: React.MouseEvent<HTMLButtonElement>,
    sorter: () => void
  ) => void;
  rowSelection: {
    type: 'checkbox' | 'radio';
  };
  order: boolean;
  sortTitle?: string;
}

const TableHeader: FC<TableHeaderProps> = ({
  columns,
  rowSelection,
  onHandleSort,
  order,
  sortTitle,
}) => {
  const isMobile = useIsMobile();

  const renderSortButton = item => {
    return (
      <SortingButton onClick={e => onHandleSort?.(e, item)}>
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
        {rowSelection && <TableHeaderEmptyCell />}
        {isMobile ? (
          <TableHeaderItem>
            <TableHeaderItemText />
          </TableHeaderItem>
        ) : (
          columns?.map((item: any, index: number) => {
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
