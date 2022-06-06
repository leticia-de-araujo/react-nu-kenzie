import "./style.css";
import cardVazio from "./../../imgs-icons/NoCard.jpg";
import trashDefault from "./../../imgs-icons/trash=Default.svg";
import trashHover from "./../../imgs-icons/trash=Hover.svg";
import { useState } from "react";

const Card = ({ listTransactions, setListTransactions }) => {
  const [srcTrashStatus, setSrcTrashStatus] = useState(trashDefault);

  const trashHoverSrc = (event) => {
    if (srcTrashStatus === trashDefault) {
      setSrcTrashStatus(trashHover);
    } else if (srcTrashStatus === trashHover) {
      setSrcTrashStatus(trashDefault);
    }
    event.target.src = srcTrashStatus;
  };

  const removeTransaction = (transactionRemove) => {
    const transactionsFiltered = listTransactions.filter((transaction) => {
      return transaction !== transactionRemove;
    });
    setListTransactions([...transactionsFiltered]);
  };

  return listTransactions.length !== 0 ? (
    <ul>
      {listTransactions.map((transaction, index) => {
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
              {parseFloat(Math.abs(transaction.value))
                .toFixed(2)
                .replace(".", ",")}
            </p>
            <button
              onClick={() => {
                removeTransaction(transaction);
              }}
            >
              <img
                onMouseOver={(event) => trashHoverSrc(event)}
                src={trashDefault}
                alt="Botão Lixeira"
              />
            </button>
          </li>
        );
      })}
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
