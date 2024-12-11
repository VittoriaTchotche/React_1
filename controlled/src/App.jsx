import Welcome from "./Welcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  return (
    <div>
      <Welcome name="vittoria" />
      <Login />
      <UncontrolledLogin />
    </div>
  );
}
export default App;
