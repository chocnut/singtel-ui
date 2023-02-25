import React, { FC, useState, useCallback } from 'react';
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleCheckBoxClick = (value: string) => {
    let newCheckboxArr = [...selectedRowKeys];
    if (newCheckboxArr.indexOf(value) >= 0) {
      newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1);
    } else {
      newCheckboxArr.push(value);
    }
    setSelectedRowKeys(newCheckboxArr);
  };

  const handleRadioClick = (value: string) => {
    setSelectedRowKeys([value]);
  };

  const handleClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      rowSelection?.type === 'checkbox'
        ? handleCheckBoxClick(value)
        : handleRadioClick(value);
    },
    [selectedRowKeys]
  );

  return (
    <div>
      {dataSource?.map((columnItem, index) => {
        return (
          <TableBodyContainer
            key={index}
            selected={selectedRowKeys.includes(index.toString())}
          >
            <TableBodyContent>
              {rowSelection && (
                <SelectionContainer
                  type={rowSelection.type}
                  selected={selectedRowKeys.includes(index.toString())}
                >
                  <InputRadio
                    onClick={handleClick}
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
