import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <main className="App-main">
        <section className="App-main-form-total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </section>
        <List listTransactions={listTransactions}>
          <Card listTransactions={listTransactions}></Card>
        </List>
      </main>
    </div>
  );
}

export default App;

// [
//   { description: "Salário recebido", type: "entrada", value: 2500 },
//   { description: "Conta de luz", type: "saída", value: -150 },
// ]
