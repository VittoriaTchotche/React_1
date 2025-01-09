import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <div>
        <Link to="/">Welcome </Link>
        <div>
          <Link to="counter">Counter </Link>
        </div>
        <div>
          <Link to="/users/:username">GithubUser </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/users"
        <Route path="/notfind" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}
export default App;
