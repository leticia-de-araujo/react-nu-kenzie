import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const calculateTotal = () => {
    const values = [];

    listTransactions.forEach((element) => {
      values.push(element.value);
    });

    console.log(values);

    const total = values.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    const totalComDecimais = total.toFixed(2);

    if (totalComDecimais.includes(".")) {
      const totalTratado = totalComDecimais.replace(".", ",");
      return totalTratado;
    } else {
      return totalComDecimais;
    }
  };

  return listTransactions.length !== 0 ? (
    <div className="TotalMoney-div">
      <div className="TotalMoney-div-valor">
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <p>R$ {calculateTotal()}</p>
    </div>
  ) : (
    <div></div>
  );
};

export default TotalMoney;
