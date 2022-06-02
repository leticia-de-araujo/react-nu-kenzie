import "./style.css";
import cardVazio from "./../../imgs-icons/NoCard.jpg";
import lixeiraDefault from "./../../imgs-icons/trash=Default.svg";
// import lixeiraHover from "./../../imgs-icons/trash=Hover.svg";

const Card = ({ listTransactions }) => {
  return listTransactions.length !== 0 ? (
    <ul>
      {listTransactions.map(({ type, value, description }, index) =>
        type !== "entrada" ? (
          <li className="Card-container saida" key={index}>
            <div className="Card-container-descriptionAndType">
              <h3>{description}</h3>
              <span>Despesa</span>
            </div>
            <p>R$ {parseFloat(Math.abs(value)).toFixed(2).replace(".", ",")}</p>
            <img src={lixeiraDefault} alt="Botão Lixeira" />
          </li>
        ) : (
          <li className="Card-container entrada" key={index}>
            <div className="Card-container-descriptionAndType">
              <h3>{description}</h3>
              <span>{type}</span>
            </div>
            <p>R$ {parseFloat(Math.abs(value)).toFixed(2).replace(".", ",")}</p>
            <button>
              <img src={lixeiraDefault} alt="Botão Lixeira" />
            </button>
          </li>
        )
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
