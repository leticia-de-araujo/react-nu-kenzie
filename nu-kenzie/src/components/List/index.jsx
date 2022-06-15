/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "../Card";
import "./style.css";

const List = ({
  listTransactions,
  setListTransactions,
  filteredTransactions,
  setFilteredTransactions,
}) => {
  const showAllTransactions = () => {
    setFilteredTransactions(listTransactions);
  };

  useEffect(showAllTransactions, [listTransactions, ]);

  const clearButtons = (event) => {
    const nav = event.target.parentElement;
    const buttons = nav.children;
    [...buttons].forEach((button) => {
      button.classList.remove("botao-selecionado");
    });
  };

  const filterTodos = (event) => {
    clearButtons(event);

    const button = event.target;
    if (!button.classList.contains("botao-selecionado")) {
      button.classList.add("botao-selecionado");
    }

    setFilteredTransactions(listTransactions);
  };

  const filterEntrada = (event) => {
    clearButtons(event);

    const button = event.target;
    button.classList.add("botao-selecionado");

    const filteredTransac = listTransactions.filter(
      (transaction) => transaction.type === "entrada"
    );
    setFilteredTransactions(filteredTransac);
  };

  const filterDespesa = (event) => {
    clearButtons(event);

    const button = event.target;
    button.classList.add("botao-selecionado");

    const filteredTransac = listTransactions.filter(
      (transaction) => transaction.type === "despesa"
    );

    setFilteredTransactions(filteredTransac);
  };

  return (
    <div className="List">
      <div className="List-header">
        <h3>Resumo Financeiro</h3>
        <nav>
          <button onClick={filterTodos} className="botao-selecionado">
            Todos
          </button>
          <button onClick={filterEntrada}>Entradas</button>
          <button onClick={filterDespesa}>Despesas</button>
        </nav>
      </div>
      <div className="List-ul">
        <Card
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filteredTransactions={filteredTransactions}
        />
      </div>
    </div>
  );
};

export default List;
