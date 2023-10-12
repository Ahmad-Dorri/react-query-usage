import { useQuery } from 'react-query';

const URL = 'https://ui.dev/api/courses/react-query/status';
const fetchQuery = () => {
  return fetch(URL).then((res) => res.json());
};
function App() {
  const statusQuery = useQuery(['status'], () => fetchQuery());

  const data = statusQuery.data;

  if (statusQuery.isFetching || statusQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (statusQuery.isError) {
    return <p>Error: {statusQuery.error.message}</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
