import { useEffect, useState } from "react";

function GithubUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/mojombo");
        if (!response.ok) {
          throw new Error("Errore nel fetching dei dati");
        }

        const data = await response.json();

        setUsers(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFunction();
  }, []);

  return (
    <div>
      {loading && <p>Caricamento dati in corso</p>} {error && <p>{error}</p>}
      <ul>
        {users.map((x) => (
          <li key={x.id}>
            {x.name} {x.login} {x.avatar_url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUser;
