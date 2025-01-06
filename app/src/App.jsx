import { Hello } from "./Hello";

import Welcome from "./Welcome";
import Age from "./Age";
import Lista from "./Lista";
import Change from "./Change";
import AlertClock from "./AlertClock";
import { UserProvider } from "./UserContext";
import GithubUser from "./GithubUser";

function App() {
  return (
    <div>
      <h1>Ciao!</h1>
      <UserProvider>
        <Hello />
        <Welcome name="Paul" age={38} />
        <Age age={38} />
        <Lista />
        <Change />
        <AlertClock />
        <Hello />
        < GithubUser />
        
      </UserProvider>
    </div>
  );
}
export default App;
