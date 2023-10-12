import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const URL =
  'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';

const ReactQueryApp = () => {
  const client = new QueryClient();
  const fetchNumber = () => {
    return fetch(URL).then((response) => {
      if (response.status !== 200) {
        throw new Error('something went wrong try again.');
      }
      return response.text();
    });
  };

  const query = useQuery(['random'], fetchNumber);

  if (query.isError) {
    return <p>{query.error.message}</p>;
  }

  return (
    <QueryClientProvider client={client}>
      <h1>REACT QUERY</h1>
      <button onClick={() => query.refetch()}>
        Random number:{' '}
        {query.isLoading || query.isFetching ? '...' : query.data}
      </button>
    </QueryClientProvider>
  );
};

export default ReactQueryApp;
