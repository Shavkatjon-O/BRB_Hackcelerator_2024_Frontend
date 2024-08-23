"use client";

import useUser from "@/hooks/useUser";

const ProfilePage = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!user) {
    return <p>Not authorized</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>{ user.email }</div>

    </div>
  );
}

export default ProfilePage;