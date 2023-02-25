import styled, { css } from 'styled-components';

const StyledTable = styled.div`
  width: 100%;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  overflow: hidden;
`;

const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  height: 80px;
  line-height: 80px;
  background: #f7f7f7;
`;

const TableHeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  margin: 0 24px;
`;

const TableHeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const TableHeaderItemText = styled.div`
  font-weight: 700;
  font-size: 20px;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableBodyContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  height: 84px;
`;

const TableBodyContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  color: #000;
  border-bottom: 1px solid #e1e1e1;
  margin: 0 24px;
`;

const TableRow = styled.div`
  flex: 1;
  text-align: initial;
  font-weight: 350;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0.001em;
  font-style: normal;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SelectionContainer = styled.label`
  ${({ type }: { type: 'checkbox' | 'radio' }) =>
    type === 'radio'
      ? css`
          cursor: pointer;
          position: relative;
          margin-right: 24px;
          width: 32px;
          height: 32px;
          border-radius: 100%;
          border: 1px solid #a8a8a8;
        `
      : css`
          cursor: pointer;
          position: relative;
          margin-right: 24px;
          width: 32px;
          height: 32px;
          border: 1px solid #a8a8a8;
          border-radius: 8px;
        `}
`;

const InputRadio = styled.input`
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export {
  StyledTable,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderItem,
  TableHeaderItemText,
  TableBodyContainer,
  TableBodyContent,
  TableRow,
  InputRadio,
  SelectionContainer,
};
