import PropTypes from "prop-types";
import css from './transactions.module.css';

const TransactionHistory = ({ transactions }) => {
    const elements = transactions.map(({ id, type, amount, currency }) => <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {elements}
            </tbody>
            </table> )
     
}

TransactionHistory.defaultProps = {
    transactions: [],
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }    
    ))
}

export default TransactionHistory;