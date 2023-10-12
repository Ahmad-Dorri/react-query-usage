import { useQuery } from 'react-query';

export function ProfileImage({ userId }) {
  const getUserUrl = `https://ui.dev/api/courses/react-query/users/${userId}`;
  const userQuery = useQuery(['user', userId], () => {
    return fetch(getUserUrl).then((res) => res.json());
  });

  if (userQuery.status !== 'success') {
    return <p>Loading...</p>;
  }

  const imageUrl = userQuery.isSuccess
    ? JSON.parse(JSON.stringify(userQuery?.data, null)).profilePictureUrl
    : null;

  return <img src={imageUrl} alt="Profile Image" />;
}
