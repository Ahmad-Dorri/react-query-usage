import { useQuery } from 'react-query';

const labelURL = 'https://ui.dev/api/courses/react-query/labels';

export default function LabelList() {
  const labelsQuery = useQuery(['labels'], () => {
    return fetch(labelURL).then((res) => res.json());
  });
  if (labelsQuery.isError) {
    return <p>Error: {labelsQuery.error.message}</p>;
  }

  if (labelsQuery.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h3>Labels</h3>
      <ul>
        {labelsQuery.data.map((label) => (
          <li key={label.id}>
            <span style={{ color: label.color }}>{label.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
