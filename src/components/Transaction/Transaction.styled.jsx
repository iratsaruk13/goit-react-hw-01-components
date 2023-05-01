import styled from "styled-components";

const TransactionTable = styled.table`
  border-radius: 10px;
  border-spacing: 1px;
  width: 450px;
  column-width: 150px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`

const TableThead = styled.thead`
  font-weight: 500;
  font-size: 24px;
  background-color: #a1e042;
  height: 50px;
  max-width: 100%;
  border-radius: 10px;
`

const TableTheadTr = styled.tr`
  border-radius: 10px;
  border: solid 1px #12b825;
`;

const TableTheadTh = styled.th`
  color: rgb(50, 50, 50);
`

const TransactionTbody = styled.tbody`
  background-color: #daedbc;
  font-size: 18px;
  font-weight: 400;
`

const TransactionTbodyTr = styled.tr`
  color: rgb(8, 33, 0);
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  transition: background-color 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    background-color: #b4e966;
  }
`

const TransactionTbodyTd = styled.td`
  text-align: left;
  padding: 5px 30px;
`

export {
  TransactionTable,
  TableThead,
  TableTheadTr,
  TableTheadTh,
  TransactionTbody,
  TransactionTbodyTr,
  TransactionTbodyTd,
}
