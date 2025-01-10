import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function UseGithubUser(username) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>C'è un errore</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UseGithubUser;
