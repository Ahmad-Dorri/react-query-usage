import { useEffect, useState } from 'react';

function App() {
  const url =
    'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';
  const [num, setNum] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>your number is :{loading ? 'loading...' : num}</div>;
}

export default App;
