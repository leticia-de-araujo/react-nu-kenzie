import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const getValues = (event, listTransactions, setListTransactions) => {
    event.preventDefault();
    const formItens = [...event.currentTarget];
    const transaction = {};

    formItens.forEach((item) => {
      if (item.name === "value") {
        if (item.value.includes(",")) {
          const itemValorTratado = item.value.replace(",", ".");
          transaction[item.name] = parseFloat(itemValorTratado);
        } else {
          transaction[item.name] = parseFloat(item.value);
        }
      } else if (item.name !== "") {
        transaction[item.name] = item.value;
      }
    });

    if (transaction.type === "despesa") {
      transaction.value = -transaction.value;
    }

    if (!isNaN(transaction.value)) {
      setListTransactions([...listTransactions, transaction]);
    }
  };

  const clearInputs = (event) => {
    event.preventDefault();
    const formInputs = [...event.currentTarget];
    formInputs.forEach((input) => (input.value = " "));
  };

  return (
    <form
      onSubmit={(event) => {
        getValues(event, listTransactions, setListTransactions);
        clearInputs(event);
      }}
    >
      <div className="Form-descricao">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          name="description"
          placeholder="Digite aqui sua descrição"
          required
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="Form-valor-tipo">
        <div className="Form-valor">
          <label htmlFor="valor">Valor</label>
          <input
            type="text"
            id="valor"
            name="value"
            placeholder="R$ "
            required
          />
        </div>
        <div className="Form-tipo">
          <label htmlFor="tipo">Tipo de valor</label>
          <select name="type" id="tipo">
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default Form;
