import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState(false);

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
  function handleLogin(event) {
    event.preventDefault();

    if (!username || !password) {
      alert("Username e Password non possono essere vuoti!");
      return;
    }
    // Se i campi sono validi, chiama la funzione onLogin passando i dati
    onLogin(username, password, remember);
  }

  return (
    <div>
      <input name="username" onChange={handleUsername} value={username} />
      <input name="password" onChange={handlePassword} value={password} />
      <input name="remember" onChange={handleremember} value={remeber} />
      <button onClick={handleLogin} value={login}>
        Login
      </button>
    </div>
  );
}
export default Login;
