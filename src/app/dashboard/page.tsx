'use client';

import withAuth from "@/components/auth/withAuth";


const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default withAuth(DashboardPage);
