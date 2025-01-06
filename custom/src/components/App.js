import UseForm from "./UseFrom";
import UseCounter from "./useCounter";
import UseCurrentLocation from "./useCurrentLocation";
import FilteredList from "/.FilteredList";
import HookUseCounter from "./hookUseCounter";

function App() {
  const { count, increment, decrement, reset } = HookUseCounter(0);

  const list = [
    { id: 1, name: "Miryam", age: 28 },
    { id: 2, name: "Claudio", age: 10 },
    { id: 3, name: "Pippo", age: 70 },
  ];

  return (
    <div>
      <UseCounter />
      <UseForm />
      <UseCurrentLocation />

      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h2>Filtered List</h2>

      <FilteredList list={list} />
    </div>
  );
}
export default App;
