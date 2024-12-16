import { useState } from "react";
import "./Conteiner.css";
function Conteiner({ title, children }) {
  const [collapsible, setCollapsible] = useState(false);
  function handleClick() {
    setCollapsible((c) => !c);
  }
  return (
    <div>
      <div className={!collapsible ? "visible" : "hidden"}>
        {title} <button onClick={handleClick}></button>
      </div>
      <div style={{ background: "white", border: "red" }}> {children}</div>;
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
export default Conteiner;
