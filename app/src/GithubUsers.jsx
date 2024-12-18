import { useContext, useState } from "react";
import { userContext } from "./UserContext";
function GithubUsers() {
  const { users } = useContext(userContext);
  const [userName, setUsername] = useState("");
  function handleClick() {
    setUsername((e) => setUsername(e.target.value));
  }

  return (
    <div>
      <form>
        <input type="text" value={users} />
        <button onClick={handleClick}>Clicca</button>
      </form>
    </div>
  );
}
export default GithubUsers;
