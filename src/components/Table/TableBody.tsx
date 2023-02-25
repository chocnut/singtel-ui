import React, { FC } from 'react';
import {
  InputRadio,
  SelectionContainer,
  TableBodyContainer,
  TableBodyContent,
  TableRow,
} from './styles';

export interface TableBodyProps {
  columns: [];
  dataSource: [];
  rowSelection?: {
    type: 'checkbox' | 'radio';
  };
}

const TableBody: FC<TableBodyProps> = ({
  columns,
  dataSource,
  rowSelection,
}) => {
  return (
    <div>
      {dataSource?.map((columnItem, index) => {
        return (
          <TableBodyContainer key={index}>
            <TableBodyContent>
              {rowSelection && (
                <SelectionContainer type={rowSelection.type}>
                  <InputRadio
                    onClick={(e: any) => console.log('click', e)}
                    type={rowSelection.type}
                    name={rowSelection.type}
                    value={index}
                  />
                </SelectionContainer>
              )}
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
