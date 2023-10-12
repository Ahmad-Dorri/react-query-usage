import { useQuery } from 'react-query';

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

function GithubUser({ username }) {
  const userQuery = useQuery([username], () => fetchUser(username));

  const data = userQuery.data;
  if (userQuery.isLoading || userQuery.isFetching) return <p>Loading...</p>;

  if (userQuery.isError) return <p>Error: {userQuery.error.message}</p>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
function App() {
  return (
    <>
      <GithubUser username={'Ahmad-Dorri'} />
    </>
  );
}

export default App;
