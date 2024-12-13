import Colors from "./Colors";
import TodoList from "./Todolist";

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
    </div>
  );
}
export default App;
