import Colors from "./Colors";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisply";
import Login from "./Login";
import TodoList from "./Todolist";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Colors
        color={[
          {
            id: 1,
            name: "pink",
          },
        ]}
      />
      <TodoList />
      <Counter />
      <Login />
      <CounterDisplay />
      <Welcome />
    </div>
  );
}
export default App;
