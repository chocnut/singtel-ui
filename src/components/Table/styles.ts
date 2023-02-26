import styled, { css } from 'styled-components';

type SelectionContainer = {
  type: 'checkbox' | 'radio';
  selected?: boolean;
};

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
  font-size: 24px;
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
  background: ${({ selected, theme }: { selected: boolean; theme: any }) =>
    selected ? theme.colors.light : ''};

  :hover {
    background: ${props => props.theme.colors.light};
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const TableHeaderEmptyCell = styled.div`
  position: relative;
  margin-right: 24px;
  width: 32px;
  height: 32px;
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

  ${mobile =>
    mobile &&
    css`
      display: flex;
      flex-direction: column;
      padding: 10px 0 10px;

      .title {
        font-style: normal;
        font-weight: 700;
      }
    `}
`;

const SelectionContainer = styled.label`
  cursor: pointer;
  position: relative;
  margin-right: 24px;
  width: 32px;
  height: 32px;

  @media screen and (max-width: 768px) {
    top: -35px;
  }

  ${({ type, selected }: SelectionContainer) =>
    type === 'radio'
      ? selected
        ? css`
            background: ${props => props.theme.colors.primary};
            border-radius: 100%;
            border: 1px solid ${props => props.theme.colors.primary};

            ::before {
              content: '';
              position: absolute;
              left: 10px;
              width: 16px;
              height: 16px;
              background-color: #fff;
              border-radius: 100%;
              transform: translateX(-10%) translateY(50%);
            }
          `
        : css`
            border-radius: 100%;
            border: 1px solid #a8a8a8;
          `
      : selected
      ? css`
          background: ${props => props.theme.colors.primary};
          border-radius: 8px;
          border: 1px solid ${props => props.theme.colors.primary};

          ::before {
            content: '';
            position: absolute;
            left: 10px;
            width: 6px;
            height: 14px;
            border-color: #fff;
            border-style: solid;
            border-width: 0 2px 2px 0;
            transform: translateX(40%) translateY(35%) rotate(45deg);
          }
        `
      : css`
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

const SortingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52.34px;
  height: 56px;
  margin-left: 5px;
  border-radius: 100%;
  cursor: pointer;

  :hover {
    background: #dedafa;
  }
`;

export {
  StyledTable,
  TableHeaderContainer,
  TableHeaderContent,
  TableHeaderItem,
  TableHeaderItemText,
  TableHeaderEmptyCell,
  TableBodyContainer,
  TableBodyContent,
  TableRow,
  InputRadio,
  SelectionContainer,
  SortingButton,
};
