import { useQuery } from 'react-query';
import { IssueItem } from './IssueItem';

export default function IssuesList() {
  const issueQuery = useQuery(['issues'], () => {
    return fetch('/api/issues')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('something went wrong.Please try again later.');
        }
        return res.json();
      })
      .catch((error) => console.log(error));
  });

  if (issueQuery.isError) {
    return <p>Error: {issueQuery.error}</p>;
  }

  return (
    <div>
      <h2>Issues List</h2>
      {issueQuery.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="issues-list">
          {issueQuery.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              status={issue.status}
              labels={issue.labels}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
