import { useState } from "react";
import "./App.css";
import logo from "./imgs-icons/Nu.svg";
import imgHome from "./imgs-icons/image-home.svg";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [landingPage, setLandingPage] = useState(true);

  const changePage = () => {
    setLandingPage(!landingPage);
  };

  return landingPage ? (
    <div className="App landingPage">
      <main className="App-main-landingPage">
        <div className="App-landingPage-text">
          <img alt="Logo" src={logo} />
          <h2>Centralize o controle das suas finanças</h2>
          <span>de forma rápida e segura</span>
          <button
            onClick={() => {
              changePage();
            }}
          >
            Iniciar
          </button>
        </div>
        <div className="App-landingPage-img">
          <img alt="Imagem Cards" src={imgHome} />
        </div>
      </main>
    </div>
  ) : (
    <div className="App">
      <Header
        landingPage={landingPage}
        setLandingPage={setLandingPage}
        changePage={changePage}
      ></Header>
      <main className="App-main">
        <section className="App-main-form-total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        >
          <Card
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Card>
        </List>
      </main>
    </div>
  );
}

export default App;

// [
//   { description: "Salário recebido", type: "entrada", value: 2500 },
//   { description: "Conta de luz", type: "despesa", value: -150 },
// ]
