function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Login usando event.target:");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Remember: ${remember}`);
  }

  function handleLogin(event) {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Login con event.target:");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Remember: ${remember}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="text" name="password" />
      <input type="text" name="remember" />
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}
export default UncontrolledLogin;
