import { useEffect, useReducer, useState } from 'react';

const URL =
  'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';

function App() {
  const [key, forceUpdate] = useReducer((x) => x + 1, 0);
  const [num, setNum] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('something went wrong try again.');
        }
        return response.text();
      })
      .then((data) => {
        setNum(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.messsage);
      });
  }, [key]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>USE EFFECT</h1>
      <button
        onClick={() => {
          forceUpdate();
        }}>
        your number is :{loading ? 'loading...' : num}
      </button>
    </>
  );
}

export default App;
