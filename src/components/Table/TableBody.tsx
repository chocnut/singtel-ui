import React, { FC } from 'react';
import { TableBodyContainer, TableBodyContent, TableRow } from './styles';

export interface TableBodyProps {
  columns: [];
  dataSource: [];
}

const TableBody: FC<TableBodyProps> = ({ columns, dataSource }) => {
  return (
    <div>
      {dataSource?.map((columnItem, index) => {
        return (
          <TableBodyContainer key={index}>
            <TableBodyContent>
              {columns.map((item, index) => {
                return (
                  <TableRow key={item?.key + index}>
                    {columnItem[item?.key]}
                  </TableRow>
                );
              })}
            </TableBodyContent>
          </TableBodyContainer>
        );
      })}
    </div>
  );
};

export default TableBody;
