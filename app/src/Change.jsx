import { useState } from "react";

function Change() {
  const [colore, setColore] = useState("red");

  const handleChange = () => {
    const colori = ["green", "yellow", "blue"];
    const coloreSelezionato = colori[Math.floor(Math.random() * colori.length)];
    setColore(coloreSelezionato);
  };
  return (
    <div>
      <h1 style={{ color: colore }}>Testo colorato!</h1>
      <button onClick={handleChange}>Cliccami per cambiare colore.</button>
    </div>
  );
}
export default Change;
