import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisply";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(`The counter is ${counter}`);
  }, [counter]);

  function handleIncrementa() {
    setCounter(counter + 1);
  }
  function handleDecrementa() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleIncrementa}>Incrementa!</button>
      <button onClick={handleDecrementa}>Decrementa!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Counter;
