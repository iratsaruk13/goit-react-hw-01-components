import PropTypes from "prop-types";
import {
  TransactionTable,
  TableThead,
  TableTheadTr,
  TableTheadTh,
  TransactionTbody,
  TransactionTbodyTr,
  TransactionTbodyTd,
} from "./Transaction.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableThead>
        <TableTheadTr>
          <TableTheadTh>Type</TableTheadTh>
          <TableTheadTh>Amount</TableTheadTh>
          <TableTheadTh>Currency</TableTheadTh>
        </TableTheadTr>
      </TableThead>
      <TransactionTbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTbodyTr key={id}>
              <TransactionTbodyTd>{type}</TransactionTbodyTd>
              <TransactionTbodyTd>{amount}</TransactionTbodyTd>
              <TransactionTbodyTd>{currency}</TransactionTbodyTd>
            </TransactionTbodyTr>
          );
        })}
      </TransactionTbody>
    </TransactionTable>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
