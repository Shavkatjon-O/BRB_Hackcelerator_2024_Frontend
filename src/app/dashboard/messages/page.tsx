// import { cookies } from "next/headers";
// import { ChatLayout } from "./_components/chat/chat-layout";

// export default function Home() {
//   const layout = cookies().get("react-resizable-panels:layout");
//   const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

//   return (
//     <div className="h-full">
//       <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
//     </div>
//   );
// }

"use client";

import { getUsers, UserType } from "./_services/chatServices";
import { useEffect, useState } from "react";
import { DefaultUserAvatar } from "./_components/DefaultUserAvatar";

const Page = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <DefaultUserAvatar />
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;