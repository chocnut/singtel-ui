import styled from 'styled-components';

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

export {
  StyledTable,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderItem,
  TableHeaderItemText,
};
