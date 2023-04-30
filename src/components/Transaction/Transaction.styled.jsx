import styled from "styled-components";

const TransactionTable = styled.table`
border-radius: 10px;
border-spacing: 10px;
width: 90%;
margin: 0 auto;
margin-top: 20px;
background-color: #fff;
transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export {TransactionTable}