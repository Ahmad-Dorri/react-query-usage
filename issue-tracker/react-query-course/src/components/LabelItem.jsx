import { useQuery } from 'react-query';

const labelURL = 'https://ui.dev/api/courses/react-query/labels';

export function LabelItem({ label }) {
  const labelsQuery = useQuery(['labels'], () => {
    return fetch(labelURL).then((res) => res.json());
  });

  return (
    <div>
      {labelsQuery.isSuccess &&
        labelsQuery.data.map((labelData) => (
          <p key={labelData.id}>
            {label === labelData.name && (
              <span className={`label ${labelData.color}`}>{label}</span>
            )}
          </p>
        ))}
    </div>
  );
}
