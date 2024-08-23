'use client';

import withAuth from "@/components/auth/withAuth";
import useUser from "@/hooks/useUser";

const DashboardPage = () => {
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
    <>
      <div>{ user.email }</div>
      <h1>Dashboard</h1>
    </>
  );
}

export default withAuth(DashboardPage);
