import "./style.css";
import cardVazio from "./../../imgs-icons/NoCard.jpg";

import { FaTrash } from "react-icons/fa";

const Card = ({
  listTransactions,
  setListTransactions,
  filteredTransactions,
}) => {
  const createTransaction = (transaction, index) => {
    return (
      <li
        className={
          transaction.type === "entrada"
            ? "Card-container entrada"
            : "Card-container despesa"
        }
        key={index}
      >
        <div className="Card-container-descriptionAndType">
          <h3>{transaction.description}</h3>
          <span>{transaction.type}</span>
        </div>
        <p>
          R${" "}
          {parseFloat(Math.abs(transaction.value)).toFixed(2).replace(".", ",")}
        </p>
        <button
          onClick={() => {
            removeTransaction(transaction);
          }}
        >
          <div className="Card-container-trash-div">
            <FaTrash />
          </div>
        </button>
      </li>
    );
  };

  const removeTransaction = (transactionRemove) => {
    const transactionsFiltered = listTransactions.filter((transaction) => {
      return transaction !== transactionRemove;
    });
    setListTransactions([...transactionsFiltered]);
  };

  return listTransactions.length > 0 || filteredTransactions.length > 0 ? (
    <ul>
      {filteredTransactions.length > 0
        ? filteredTransactions.map((transaction, index) =>
            createTransaction(transaction, index)
          )
        : listTransactions.map((transaction, index) =>
            createTransaction(transaction, index)
          )}
    </ul>
  ) : (
    <ul>
      <li className="Card-container-vazio-texto">
        <p>Você ainda não possui nenhum lançamento</p>
      </li>

      <li className="Card-container-vazio-card">
        <img src={cardVazio} alt="Card Vazio" />
      </li>
      <li className="Card-container-vazio-card">
        <img src={cardVazio} alt="Card Vazio" />
      </li>
      <li className="Card-container-vazio-card">
        <img src={cardVazio} alt="Card Vazio" />
      </li>
    </ul>
  );
};

export default Card;
