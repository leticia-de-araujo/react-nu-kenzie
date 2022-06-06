import Card from "../Card";
import "./style.css";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="List">
      <div className="List-header">
        <h3>Resumo Financeiro</h3>
        <nav>
          <button className="botao-selecionado">Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </nav>
      </div>
      <div className="List-ul">
        <Card
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  );
};

export default List;
