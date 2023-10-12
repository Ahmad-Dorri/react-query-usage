import { Link } from 'react-router-dom';
import { GoIssueOpened, GoIssueClosed, GoComment } from 'react-icons/go';
import { relativeDate } from '../helpers/relativeDate';
import { LabelItem } from './LabelItem';
import { ProfileImage } from './ProfileImage';

export function IssueItem({
  title,
  number,
  status,
  labels,
  assignee,
  commentCount,
  createdBy,
  createdDate,
}) {
  return (
    <li>
      <div>
        {status === 'done' || status === 'cancelled' ? (
          <GoIssueClosed style={{ color: 'red' }} />
        ) : (
          <GoIssueOpened style={{ color: 'green' }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <LabelItem key={label} label={label} />
          ))}
        </span>
        <small>
          {/* //todo: CHANGE CREATED BY TO THE CREATOR USERNAME */}
          {''}#{number} opened {relativeDate(createdDate)} by {createdBy}
        </small>
      </div>
      {assignee ? <ProfileImage userId={assignee} /> : null}
      <span>
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
