import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remeber, setRemeber] = useState("");
  const [login, setLogin] = useState("");

  function handleUsername(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handlePassword(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function handleremember(event) {
    const value = event.target.value;
    setRemeber(value);
  }
  function handleLogin() {
    if (!username && !password) {
      setLogin("");
    }
  }

  return (
    <div>
      <input name="username" onChange={handleUsername} value={username} />
      <input name="password" onChange={handlePassword} value={password} />
      <input name="remeber" onChange={handleremember} value={remeber} />
      <button onSubmit={handleLogin} value={login}>
        Login
      </button>
    </div>
  );
}
export default Login;
