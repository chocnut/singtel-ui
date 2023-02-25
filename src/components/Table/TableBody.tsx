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
  // const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleCheckBoxClick = (value: string, object: any) => {
    let newCheckboxArr = [...selectedRowKeys];
    if (newCheckboxArr.indexOf(value) >= 0) {
      newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1);
    } else {
      newCheckboxArr.push(value);
    }
    setSelectedRowKeys(newCheckboxArr);
  };

  const handleRadioClick = (value: string, object: any) => {
    setSelectedRowKeys([value]);
    // setSelectedRows(object);
  };

  const handleClick = useCallback(
    (e: any, object: any) => {
      const value = e.target.value;
      rowSelection?.type === 'checkbox'
        ? handleCheckBoxClick(value, object)
        : handleRadioClick(value, object);
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
                    onClick={(e: any) => handleClick(e, columnItem)}
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
