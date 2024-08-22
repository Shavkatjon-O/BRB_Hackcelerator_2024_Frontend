'use client';

import withAuth from "@/components/auth/withAuth";

// import { currentUser } from "@/hooks/useUser";
import { useUser } from "@/hooks/useUser";

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Welcome {user?.email}</h1>

      <h1>Dashboard</h1>
    </>
  );
}

export default withAuth(DashboardPage);
