import React, { FC, useState, useCallback } from 'react';
import useIsMobile from './hooks/useIsMobile';
import {
  InputRadio,
  SelectionContainer,
  TableBodyContainer,
  TableBodyContent,
  TableRow,
} from './styles';
import { Column } from './Table';

export interface TableBodyProps {
  columns: Array<Column>;
  dataSource: Array<object>;
  rowSelection?: {
    type: 'checkbox' | 'radio';
  };
}

const TableBody: FC<TableBodyProps> = ({
  columns,
  dataSource,
  rowSelection,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const isMobile = useIsMobile();

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
    (e: any) => {
      const value = e.target.value;

      rowSelection?.type === 'checkbox'
        ? handleCheckBoxClick(value)
        : handleRadioClick(value);
    },
    [selectedRowKeys]
  );

  const renderMobileRow = (columnItem: any) => {
    return (
      <>
        <TableRow mobile>
          {columns?.map((item, index) => {
            return (
              <span key={index} className="title">
                {item.title}:{' '}
              </span>
            );
          })}
        </TableRow>
        <TableRow mobile>
          {columns?.map(item => {
            return <span className="text">{columnItem[item.key]}</span>;
          })}
        </TableRow>
      </>
    );
  };

  return (
    <div>
      {dataSource?.map((columnItem: any, index) => {
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
              {isMobile
                ? renderMobileRow(columnItem)
                : columns?.map((item, index) => {
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
