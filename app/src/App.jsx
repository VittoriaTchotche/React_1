import { Hello } from "./Hello";

import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Paul" age={38} />;
    </div>
  );
}
export default App;
