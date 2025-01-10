import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import UseGithubUser from "./useGithubUser";

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
        <div>
          <Link to="users">username di Git</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />

        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="users" element={<UseGithubUser />} />
      </Routes>
    </>
  );
}
export default App;
