import React from "react"
import './App.css';
import Logo from "./components/Logo"
import Card from "./components/Card";
import data from "./data";

function App() {

  const cards = data.map(item => {
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Logo></Logo>
      <section className="cards-section">
        {cards}
      </section>
    </div>
  );
}

export default App;
