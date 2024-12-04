import { Hello } from "./Hello";

import Welcome from "./Welcome";
import Age from "./Age";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Paul" age={38} />
      <Age age={38} />
    </div>
  );
}
export default App;
